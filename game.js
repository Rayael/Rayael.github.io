const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Position du sol ajustée au bas de l'image (1111px - hauteur estimée du sprite ~128px)
const GROUND_Y = 980;

// Configuration des niveaux
const LEVELS = [
    { name: "Berlin", bg: "backgrounds/BerlinBG.png", music: "musics/BerlinMusic.mp3" },
    { name: "Cologne", bg: "backgrounds/CologneBG.png", music: "musics/CologneMusic.mp3" },
    { name: "Brest", bg: "backgrounds/BrestBG.png", music: "musics/BrestMusic.mp3" },
    { name: "Strasbourg", bg: "backgrounds/StrasbourgBG.png", music: "musics/StrasbourgMusic.mp3" }
];

let currentLevelIndex = 0;
let currentBgImage = new Image();
let currentAudio = null;

// Assets du Personnage (Axe East uniquement)
const ASSETS = {
    idle: "character/rotations/east.png",
    running: Array.from({ length: 6 }, (_, i) => `character/animations/Running/east/frame_00${i}.png`),
    jumping: Array.from({ length: 9 }, (_, i) => `character/animations/Jumping/east/frame_00${i}.png`)
};

const images = { running: [], jumping: [], idle: new Image() };

// Chargement d'un niveau (Arrière-plan + Musique)
function loadLevel(index) {
    const level = LEVELS[index];
    
    currentBgImage.src = level.bg;

    if (currentAudio) {
        currentAudio.pause();
    }
    
    currentAudio = new Audio(level.music);
    currentAudio.loop = true;
    currentAudio.play().catch(() => {
        console.log("Interaction requise avec la page pour lancer la musique.");
    });
}

// Préchargement de l'ensemble des sprites
function loadAssets(callback) {
    let total = 1 + ASSETS.running.length + ASSETS.jumping.length;
    let loaded = 0;

    const check = () => { if (++loaded === total) callback(); };

    images.idle.src = ASSETS.idle;
    images.idle.onload = check;

    ASSETS.running.forEach((src, i) => {
        images.running[i] = new Image();
        images.running[i].src = src;
        images.running[i].onload = check;
    });

    ASSETS.jumping.forEach((src, i) => {
        images.jumping[i] = new Image();
        images.jumping[i].src = src;
        images.jumping[i].onload = check;
    });
}

// Entité Personnage
const character = {
    x: 50,
    y: GROUND_Y,
    speed: 5,
    state: "IDLE", // IDLE, RUNNING, JUMPING
    currentFrame: 0,
    frameTimer: 0,
    frameSpeed: 6,
    isGrounded: true,
    velocityY: 0,
    gravity: 0.8,

    update() {
        // Déplacement horizontal lors de la course
        if (keys["ArrowRight"] || keys["d"]) {
            this.x += this.speed;
            // Réapparition à gauche si sortie de l'écran par la droite
            if (this.x > canvas.width) {
                this.x = -60;
            }
        }

        // Physique et trajectoire du saut
        if (this.state === "JUMPING") {
            this.y += this.velocityY;
            this.velocityY += this.gravity;

            // Réception au sol
            if (this.y >= GROUND_Y) {
                this.y = GROUND_Y;
                this.isGrounded = true;
                this.state = (keys["ArrowRight"] || keys["d"]) ? "RUNNING" : "IDLE";
                this.currentFrame = 0;
            }
        }

        // Animation des images (Frames)
        this.frameTimer++;
        if (this.frameTimer >= this.frameSpeed) {
            this.frameTimer = 0;

            if (this.state === "RUNNING") {
                this.currentFrame = (this.currentFrame + 1) % images.running.length;
            } else if (this.state === "JUMPING") {
                if (this.currentFrame < images.jumping.length - 1) {
                    this.currentFrame++;
                }
            }
        }
    },

    draw() {
        let img = images.idle;
        if (this.state === "RUNNING") img = images.running[this.currentFrame];
        if (this.state === "JUMPING") img = images.jumping[this.currentFrame];

        if (img && img.complete) {
            ctx.drawImage(img, this.x, this.y);
        }
    }
};

// Gestion des entrées clavier
const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;

    // Déblocage du son après la première action joueur
    if (currentAudio && currentAudio.paused) {
        currentAudio.play().catch(() => {});
    }

    // Commande Saut
    if ((e.key === " " || e.key === "ArrowUp") && character.isGrounded) {
        character.state = "JUMPING";
        character.isGrounded = false;
        character.velocityY = -15;
        character.currentFrame = 0;
    }

    // Commande Course (Est)
    if ((e.key === "ArrowRight" || e.key === "d") && character.isGrounded) {
        if (character.state !== "RUNNING") {
            character.state = "RUNNING";
            character.currentFrame = 0;
        }
    }

    // Touche N : Changement manuel de niveau
    if (e.key === "n" || e.key === "N") {
        currentLevelIndex = (currentLevelIndex + 1) % LEVELS.length;
        loadLevel(currentLevelIndex);
    }
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;

    if ((e.key === "ArrowRight" || e.key === "d") && character.state === "RUNNING") {
        character.state = "IDLE";
        character.currentFrame = 0;
    }
});

// Boucle de rendu
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Rendu du décor de fond
    if (currentBgImage.complete && currentBgImage.src) {
        ctx.drawImage(currentBgImage, 0, 0, canvas.width, canvas.height);
    }

    // 2. Mise à jour et rendu du personnage
    character.update();
    character.draw();

    requestAnimationFrame(gameLoop);
}

// Initialisation au chargement des ressources
loadAssets(() => {
    loadLevel(currentLevelIndex);
    gameLoop();
});
