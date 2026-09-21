const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Configuration des niveaux
const LEVELS = [
    { name: "Berlin", bg: "backgrounds/BerlinBG.png", music: "audio/BerlinMusic.mp3" },
    { name: "Cologne", bg: "backgrounds/CologneBG.png", music: "audio/CologneMusic.mp3" },
    { name: "Brest", bg: "backgrounds/BrestBG.png", music: "audio/BrestMusic.mp3" },
    { name: "Strasbourg", bg: "backgrounds/StrasbourgBG.png", music: "audio/StrasbourgMusic.mp3" }
];

let currentLevelIndex = 0;
let currentBgImage = new Image();
let currentAudio = new Audio();

// Assets du Personnage
const ASSETS = {
    idle: "character/rotations/east.png",
    running: Array.from({ length: 6 }, (_, i) => `character/animations/Running/east/frame_00${i}.png`),
    jumping: Array.from({ length: 9 }, (_, i) => `character/animations/Jumping/east/frame_00${i}.png`)
};

const images = { running: [], jumping: [], idle: new Image() };

// Chargement du niveau (Fond + Musique)
function loadLevel(index) {
    const level = LEVELS[index];
    
    // Changement de fond
    currentBgImage.src = level.bg;

    // Changement de musique
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(level.music);
    currentAudio.loop = true;
    currentAudio.play().catch(() => {
        console.log("Clique sur la page pour activer l'audio.");
    });

    console.title = `Niveau actuel : ${level.name}`;
}

// Chargement initial des sprites
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

// Objet Personnage
const character = {
    x: 100,
    y: 800, // Ajusté pour le canvas de 1111px de haut
    state: "IDLE",
    currentFrame: 0,
    frameTimer: 0,
    frameSpeed: 6,
    isGrounded: true,
    velocityY: 0,
    gravity: 0.8,

    update() {
        if (this.state === "JUMPING") {
            this.y += this.velocityY;
            this.velocityY += this.gravity;

            if (this.y >= 800) {
                this.y = 800;
                this.isGrounded = true;
                this.state = keys["ArrowRight"] || keys["d"] ? "RUNNING" : "IDLE";
                this.currentFrame = 0;
            }
        }

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

// Contrôles
const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;

    // Saut
    if ((e.key === " " || e.key === "ArrowUp") && character.isGrounded) {
        character.state = "JUMPING";
        character.isGrounded = false;
        character.velocityY = -14;
        character.currentFrame = 0;
    }

    // Course vers l'Est
    if ((e.key === "ArrowRight" || e.key === "d") && character.isGrounded) {
        if (character.state !== "RUNNING") {
            character.state = "RUNNING";
            character.currentFrame = 0;
        }
    }

    // Touche 'N' pour passer au niveau suivant
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

// Boucle du Jeu
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Dessine le fond d'écran de la ville actuelle
    if (currentBgImage.complete && currentBgImage.src) {
        ctx.drawImage(currentBgImage, 0, 0, canvas.width, canvas.height);
    }

    // 2. Met à jour et dessine le personnage
    character.update();
    character.draw();

    requestAnimationFrame(gameLoop);
}

// Initialisation
loadAssets(() => {
    loadLevel(currentLevelIndex);
    gameLoop();
});
