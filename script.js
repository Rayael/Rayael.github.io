// Sound Effect - Bleep audio style Undertale (Tonalité grave pour R.)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
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

// Scénario (Arbre de dialogue)
const story = [
  { 
    id: 1, 
    speaker: "R.", 
    text: "[...]", 
    next: 2 
  },
  { 
    id: 2, 
    speaker: "R.", 
    text: "Tu sais ...", 
    next: 3 
  },
  { 
    id: 3, 
    speaker: "R.", 
    text: "Aujourd'hui est un jour spécial.", 
    next: 4 
  },
  { 
    id: 4, 
    speaker: "R.", 
    text: "On s'est rencontrés, en vrai, il y a 5 ans maintenant.", 
    next: null // Attente de la suite de ton scénario
  }
];

let currentStep = 1;
let isTyping = false;

const startBtn = document.getElementById('start-btn');
const mainMenu = document.getElementById('main-menu');
const bgm = document.getElementById('bgm');
const manBubble = document.getElementById('man-bubble');
const textElem = document.getElementById('dialog-text');
const choicesContainer = document.getElementById('choices-container');

// Démarrage avec fondu
startBtn.addEventListener('click', () => {
  mainMenu.classList.add('fade-out');
  bgm.play().catch(() => {});
  setTimeout(() => {
    mainMenu.style.display = 'none';
    manBubble.style.display = 'block';
    renderStep(currentStep);
  }, 1500);
});

// Écriture progressive
function typeWriter(text, i = 0) {
  if (i < text.length) {
    isTyping = true;
    textElem.textContent += text.charAt(i);
    if (text.charAt(i) !== ' ') playBlip();
    setTimeout(() => typeWriter(text, i + 1), 35);
  } else {
    isTyping = false;
  }
}

function renderStep(id) {
  const node = story.find(item => item.id === id);
  if (!node) return;

  textElem.textContent = "";
  choicesContainer.innerHTML = "";

  typeWriter(node.text);

  // Attente de la fin de l'animation de texte
  const checkDone = setInterval(() => {
    if (!isTyping) {
      clearInterval(checkDone);

      // Si le nœud contient des choix multiples
      if (node.choices) {
        node.choices.forEach(choice => {
          const btn = document.createElement('button');
          btn.className = 'woman-choice-btn';
          btn.textContent = choice.text;
          btn.onclick = () => renderStep(choice.next);
          choicesContainer.appendChild(btn);
        });
      } 
      // Si c'est juste un simple [Suivant] de la part d'E.
      else if (node.next !== null && node.next !== undefined) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'woman-choice-btn';
        nextBtn.textContent = "Suivant ▶";
        nextBtn.onclick = () => renderStep(node.next);
        choicesContainer.appendChild(nextBtn);
      }
    }
  }, 50);
}