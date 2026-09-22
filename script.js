const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Son de défilement du texte
function playBlip() {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(130, audioCtx.currentTime); 
  gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.04);
}

// Son lors d'un clic sur un bouton / choix
function playClickSound() {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(440, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
  gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.08);
}

// Variables d'état
let playCount = 0; // Nombre de parties jouées
let userChoices = []; // Historique des choix faits pour détecter le combo secret

const SECRET_COMBO = [3, 2, 1, 3, 3];

const story = [
  { id: 0, text: "Ah, te revoilà ! Tu veux une autre dose d'amour ?", next: 1 },
  { id: 1, text: "[...]", next: 2 },
  { id: 2, text: "[...] Tu sais ...", next: 3 },
  { id: 3, text: "Aujourd'hui est un jour spécial.", next: 4 },
  { id: 4, text: "On s'est rencontrés il y a 5 ans maintenant.", next: 5 },
  { id: 5, text: "D'abord à Berlin, dans un Novotel, gênés par cette première rencontre.", next: 6 },
  { id: 6, text: "Je me rappelle de la visite du musée, des chambres d'hôtel...", next: 7 },
  { id: 7, text: "Du sandwich empoisonné (aux oeufs) et du pull que tu m'as emprunté.", next: 8 },
  { id: 8, text: "J'étais stressé au début, mais heureux de te connaître en vrai.", next: 9 },
  { id: 9, text: "Et oui, tu étais resplendissante. Évidemment.", next: 10 },
  { 
    id: 10, 
    text: "Et toi, que pensais-tu de moi ?", 
    choices: [
      { text: "Franchement, rien de spécial.", choiceNum: 1, next: 11 },
      { text: "Tu étais mignon, et très attentionné.", choiceNum: 2, next: 12 },
      { text: "J'ai su, dès le premier regard, que tu étais l'homme de ma vie !", choiceNum: 3, next: 13 }
    ] 
  },
  { id: 11, text: "Hahahaha, je comprends...", next: 14 },
  { id: 12, text: "Hahaha, je vois, c'est gentil.", next: 14 },
  { id: 13, text: "... Vraiment ? J'ai du mal à y croire", next: 14 },

  { id: 14, text: "En tout cas, c'était des jours riches en émotions.", next: 15 },
  { 
    id: 15, 
    text: "Surtout avec... Kirrigan... Je plaisante.", 
    choices: [
      { text: "*Taper l'épaule*", choiceNum: 1, next: 16 },
      { text: "*Sourire*", choiceNum: 2, next: 17 }
    ]
  },
  { id: 16, text: "Aïe, je l'ai mérité. Quelle nostalgie.", next: 18 },
  { id: 17, text: "A l'époque, je voulais que tu réagisses.", next: 18 },

  { id: 18, text: "Je voulais que tu sois à l'aise avec moi.", next: 19 },
  { id: 19, text: "Le voyage jusqu'à l'aéroport était stressant...", next: 20 },
  { id: 20, text: "Merci encore pour la bouteille d'eau.", next: 21 },
  { id: 21, text: "[...]", womanText: "A quoi tu penses ?", next: 22 },
  { id: 22, text: "Je pensais à notre deuxième rencontre, à Cologne.", next: 23 },
  { id: 23, text: "C'est durant ces jours-là que je suis tombé amoureux.", next: 24 },
  { id: 24, text: "Même si c'est embarrassant, surtout le dernier jour...", next: 25 },
  { id: 25, text: "[...]", next: 26 },
  { id: 26, text: "Qui sait, ce qui se serait passé, autrement.", next: 27 },
  { id: 27, text: "Mais peu importe, car je suis heureux d'être avec toi.", next: 28 },
  { id: 28, text: "Et que je suis fier de notre histoire.", next: 29 },
  { id: 29, text: "Ton arrivée à Brest était vraiment spéciale pour moi.", next: 30 },
  { id: 30, text: "On a beaucoup déménagé, on a eu Grechka...", next: 31 },
  { id: 31, text: "Vivement qu'un chat robot existe !", next: 32 },
  { id: 32, text: "[...]", womanText: "Quoi d'autre ?", next: 33 },
  { id: 33, text: "Je me rends compte que ce n'était pas facile.", next: 34 },
  { id: 34, text: "Avec les appartements, le budget, le stress...", next: 35 },
  { id: 35, text: "Même aujourd'hui, c'est compliqué", next: 36 },
  { id: 36, text: "Mais on progresse, j'ai bon espoir.", next: 37 },
  { id: 37, text: "Avec toi à mes côtés, je sens que tout est possible.", next: 38 },
  { 
    id: 38, 
    text: "Je t'aime, tu sais.", 
    choices: [
      { text: "Moi aussi je t'aime.", choiceNum: 1, next: 39 },
      { text: "*Rester silencieuse*", choiceNum: 2, next: 40 }
    ]
  },
  { id: 39, text: "*sourit*", next: 41 },
  { id: 40, text: "*soupire, déçu, une larme coulant le long de sa joue*", next: 41 },

  { 
    id: 41, 
    text: "Je me demandais, tu sais quel est mon plat préféré ?", 
    choices: [
      { text: "Burger et frites ?", choiceNum: 1, next: 42 },
      { text: "Sushis ?", choiceNum: 2, next: 43 },
      { text: "... Moi ?", choiceNum: 3, next: 44 }
    ]
  },
  { id: 42, text: "Hmmm, non. Mais j'aime bien.", next: 45 },
  { id: 43, text: "En vrai, c'est possible oui.", next: 45 },
  { id: 44, text: "... En effet *clin d'oeil*", next: 45 },

  { id: 45, text: "Bref, il ne me reste plus qu'une chose à dire.", womanText: "Quoi ?", next: 46 },
  { id: 46, text: "Je t'aime, énormement. Vraiment.", next: 47 },
  { id: 47, text: "Comme je te l'ai déjà dit, sans toi...", next: 48 },
  { id: 48, text: "Je ne serai jamais allé aussi loin dans ma vie.", next: 49 },
  { id: 49, text: "Et il me reste beaucoup de choses à accomplir...", next: 50 },
  { id: 50, text: "A tes côtés.", next: 51 },
  { id: 51, text: "[...]", womanText: "... ?", next: 52 },
  { id: 52, text: "Je suis heureux d'être avec toi depuis si longtemps.", next: 53 },
  { id: 53, text: "Et je nous souhaite du bonheur pour les décennies à venir.", next: 54 },
  { 
    id: 54, 
    text: "Alors, pour finir, que souhaiterais-tu ajouter ?", 
    choices: [
      { text: "J'ai faim.", choiceNum: 1, end: true },
      { text: "J'ai soif.", choiceNum: 2, end: true },
      { text: "Fais moi un câlin.", choiceNum: 3, end: true }
    ]
  },
  // Nœud secret (Combo 3 -> 2 -> 1 -> 3 -> 3)
  { 
    id: 999, 
    text: "Je t'aime. Je t'aime. Je t'aime. Je t'aime. Je t'aime. Je t'aime. Je t'aime. Je t'aime. Je t'aime. Je t'aime.\nI love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you.\nЯ тебя люблю. Я тебя люблю. Я тебя люблю. Я тебя люблю. Я тебя люблю. Я тебя люблю. Я тебя люблю. Я тебя люблю. Я тебя люблю. Я тебя люблю.\nIch liebe dich. Ich liebe dich. Ich liebe dich. Ich liebe dich. Ich liebe dich. Ich liebe dich. Ich liebe dich. Ich liebe dich. Ich liebe dich. Ich liebe dich.",
    end: true 
  }
];

let currentStep = 1;
let isTyping = false;

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const mainMenu = document.getElementById('main-menu');
const bgm = document.getElementById('bgm');
const manBubble = document.getElementById('man-bubble');
const textElem = document.getElementById('dialog-text');
const choicesContainer = document.getElementById('choices-container');
const endScreen = document.getElementById('end-screen');
const endText = document.getElementById('end-text');

// Lancement du jeu depuis le menu principal
startBtn.addEventListener('click', () => {
  playClickSound();
  mainMenu.classList.add('fade-out');
  bgm.play().catch(() => {});
  setTimeout(() => {
    mainMenu.style.display = 'none';
    startStory();
  }, 1500);
});

// Bouton Recommencer
restartBtn.addEventListener('click', () => {
  playClickSound();
  endScreen.style.display = 'none';
  startStory();
});

function startStory() {
  userChoices = [];
  choicesContainer.style.display = 'flex';
  manBubble.style.display = 'block';

  // Si c'est au moins la 2ème partie, on commence par le message spécial (id: 0)
  if (playCount > 0) {
    currentStep = 0;
  } else {
    currentStep = 1;
  }
  playCount++;
  renderStep(currentStep);
}

function typeWriter(text, i = 0) {
  if (i < text.length) {
    isTyping = true;
    textElem.textContent += text.charAt(i);
    if (text.charAt(i) !== ' ' && text.charAt(i) !== '\n') playBlip();
    setTimeout(() => typeWriter(text, i + 1), 30);
  } else {
    isTyping = false;
  }
}

function renderStep(id) {
  const node = story.find(item => item.id === id);
  if (!node) return;

  currentStep = id;
  textElem.textContent = "";
  choicesContainer.innerHTML = "";

  typeWriter(node.text);

  const checkDone = setInterval(() => {
    if (!isTyping) {
      clearInterval(checkDone);

      if (node.choices) {
        node.choices.forEach(choice => {
          const btn = document.createElement('button');
          btn.className = 'woman-choice-btn';
          btn.textContent = choice.text;
          btn.onclick = () => {
            playClickSound();
            if (choice.choiceNum) {
              userChoices.push(choice.choiceNum);
            }

            // Vérification de la fin avec déclenchement du combo secret
            if (choice.end) {
              if (isSecretComboActive()) {
                renderStep(999); // Affichage du pavé d'amour
              } else {
                showEndScreen();
              }
            } else {
              renderStep(choice.next);
            }
          };
          choicesContainer.appendChild(btn);
        });
      } else if (node.next !== undefined && node.next !== null) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'woman-choice-btn';
        nextBtn.textContent = node.womanText ? node.womanText : "Suivant ▶";
        nextBtn.onclick = () => {
          playClickSound();
          renderStep(node.next);
        };
        choicesContainer.appendChild(nextBtn);
      } else if (node.end) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'woman-choice-btn';
        nextBtn.textContent = "Suivant ▶";
        nextBtn.onclick = () => {
          playClickSound();
          showEndScreen();
        };
        choicesContainer.appendChild(nextBtn);
      }
    }
  }, 50);
}

function isSecretComboActive() {
  if (userChoices.length !== SECRET_COMBO.length) return false;
  return userChoices.every((val, index) => val === SECRET_COMBO[index]);
}

function showEndScreen() {
  manBubble.style.display = 'none';
  choicesContainer.style.display = 'none';
  endScreen.style.display = 'flex';
  endText.textContent = "Joyeux cinq ans ensemble, je t'aime tellement <3";
}
