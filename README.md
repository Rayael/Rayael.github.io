<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>Cahier de conjugaison — 3e groupe (Retro Edition)</title>
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<title>Conjugaison</title>
<style>
  :root {
    /* NOUVEAU THEME PAR DEFAUT : Bleu Nuit / Clair & Esthétique */
    --bg-color: #e2e8f0;       /* Fond général gris-bleu très clair */
    --sheet-bg: #ffffff;       /* Fond de la carte blanc pur */
    --border-main: #0f172a;    /* Bleu nuit très profond (presque noir) */
    --text-main: #1e293b;      /* Bleu nuit légèrement adouci pour la lecture */
    --text-muted: #64748b;     /* Gris-bleu pour les textes secondaires */
    --chip-bg: #f1f5f9;        /* Fond des boutons inactifs */
    --chip-active-bg: #2563eb; /* Bleu vif pour les éléments actifs */
    --chip-active-text: #ffffff;
    --input-focus: #2563eb;    /* Curseur et input bleu vif */
    --correct-color: #10b981;  /* Vert émeraude moderne */
    --incorrect-color: #ef4444;/* Rouge vif moderne */
    --ru-bg: rgba(37, 99, 235, 0.08); /* Fond bleuté léger pour le russe */
    
    /* Polices modernes et ultra-lisibles */
    --font-main: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    --font-ru: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  
  /* --- THEME SOMBRE (Cyberpunk) --- */
  body.dark-mode {
    --bg-color: #121212; --sheet-bg: #1a1a1a; --border-main: #00ffcc;
    --text-main: #f0f0f0; --text-muted: #8c8c8c; --chip-bg: #2a2a2a;
    --chip-active-bg: #00ffcc; --chip-active-text: #121212;
    --input-focus: #ff0055; --correct-color: #39ff14; --incorrect-color: #ff0055;
    --ru-bg: rgba(0, 255, 204, 0.1);
  }

  /* --- THEME SAKURA --- */
  body.sakura-mode {
    --bg-color: #ffd1dc !important; --sheet-bg: #fff0f5 !important; 
    --border-main: #b03060 !important; --text-main: #4a3636 !important; 
    --text-muted: #8b4c5e !important; --chip-bg: #ffb7c5 !important;
    --chip-active-bg: #b03060 !important; --chip-active-text: #fff !important;
    --input-focus: #ff1493 !important; --correct-color: #2e8b57 !important; 
    --incorrect-color: #dc143c !important; --ru-bg: rgba(255, 183, 197, 0.5) !important;
  }

  * { box-sizing: border-box; border-radius: 0 !important; } /* Garde l'aspect blocky */
  
  html, body { 
    margin: 0; padding: 0; min-height: 100vh; 
    background: var(--bg-color); font-family: var(--font-main); 
    transition: background-color 0.3s ease; color: var(--text-main); 
  }
  
  body { 
    display: flex; 
    justify-content: center; 
    align-items: flex-start; /* Permet un bon scroll sur mobile */
    padding: 16px 8px; 
    position: relative; /* Pour que l'easter egg se positionne bien au fond */
  }
  
  /* --- MENU SANDWICH (FIXE POUR RESTER VISIBLE) --- */
  .top-buttons { 
    position: fixed; /* Reste à l'écran même en scrollant */
    top: 16px; right: 16px; 
    display: flex; flex-direction: column; align-items: flex-end; gap: 8px; z-index: 100; 
  }
  .nav-btn { 
    background: var(--sheet-bg); border: 3px solid var(--border-main); color: var(--text-main); 
    font-size: 15px; font-weight: 700; cursor: pointer; padding: 8px 12px; font-family: var(--font-main); 
    box-shadow: 4px 4px 0px var(--border-main); transition: transform 0.1s, box-shadow 0.1s; white-space: nowrap;
  }
  .nav-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px var(--border-main); }
  
  #hamburger-btn { font-size: 18px; }
  
  #dropdown-menu {
    display: flex; flex-direction: column; gap: 8px; opacity: 0; visibility: hidden;
    transform: translateY(-10px); transition: all 0.2s ease; pointer-events: none; align-items: flex-end;
  }
  #dropdown-menu.show { opacity: 1; visibility: visible; transform: translateY(0); pointer-events: auto; }

  /* --- STRUCTURE PRINCIPALE --- */
  #sheet { 
    position: relative; width: 100%; max-width: 480px; 
    background: var(--sheet-bg); border: 4px solid var(--border-main); 
    box-shadow: 8px 8px 0px var(--border-main); overflow: hidden; 
    margin-top: 50px; margin-bottom: 60px; z-index: 2;
  }
  #content { padding: 24px; }
  
  h1 { font-weight: 900; font-size: 28px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: -0.5px; }
  .subtitle { font-size: 16px; color: var(--text-muted); margin: 0 0 20px; line-height: 1.4; font-weight: 500; }
  .section-label { font-size: 14px; font-weight: 800; text-transform: uppercase; margin: 24px 0 12px; border-bottom: 2px dashed var(--text-muted); display: inline-block; letter-spacing: 0.5px; }
  
  .chip-row { display: flex; flex-wrap: wrap; gap: 10px; }
  .chip { font-size: 14px; font-weight: 700; padding: 8px 14px; border: 2px solid var(--border-main); background: var(--chip-bg); color: var(--text-main); cursor: pointer; box-shadow: 3px 3px 0px var(--border-main); text-transform: uppercase; transition: transform 0.1s, box-shadow 0.1s; }
  .chip:active { transform: translate(3px, 3px); box-shadow: 0px 0px 0px var(--border-main); }
  .chip.active { background: var(--chip-active-bg); border-color: var(--chip-active-bg); color: var(--chip-active-text); }
  
  .btn { font-family: var(--font-main); font-size: 18px; font-weight: 900; text-transform: uppercase; padding: 14px 20px; background: var(--sheet-bg); color: var(--text-main); border: 4px solid var(--border-main); cursor: pointer; width: 100%; margin-top: 20px; box-shadow: 6px 6px 0px var(--border-main); transition: transform 0.1s, box-shadow 0.1s, background-color 0.2s; }
  .btn:active { transform: translate(6px, 6px); box-shadow: 0px 0px 0px var(--border-main); }
  
  .score-row { font-size: 16px; font-weight: 700; display: flex; justify-content: space-between; align-items: flex-end; }
  .stats { display: flex; flex-direction: column; line-height: 1.3; }
  .hr { border: none; border-top: 4px dotted var(--border-main); margin: 16px 0; }
  
  .prompt-header { margin-bottom: 16px; }
  .infinitive { font-size: 26px; font-weight: 900; text-transform: uppercase; }
  .tense-tag { font-size: 16px; font-weight: 700; color: var(--text-muted); }
  
  .sentence-row { display: flex; align-items: baseline; flex-wrap: wrap; gap: 10px; font-size: 22px; font-weight: 600; line-height: 1.6; margin-bottom: 12px; }
  #answer-input { font-family: var(--font-main); font-size: 24px; font-weight: 800; color: var(--input-focus); background: transparent; border: none; border-bottom: 4px solid var(--border-main); padding: 4px 8px; width: 150px; text-align: center; }
  #answer-input::placeholder { color: var(--text-muted); font-size: 18px; font-weight: 500; }
  #answer-input:focus { outline: none; border-bottom-color: var(--input-focus); background: var(--ru-bg); }
  
  .accent-bar { display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
  .accent-btn { font-family: var(--font-main); font-weight: 800; background: var(--chip-bg); border: 2px solid var(--border-main); color: var(--text-main); font-size: 16px; padding: 6px 14px; cursor: pointer; box-shadow: 3px 3px 0px var(--border-main); transition: transform 0.1s, box-shadow 0.1s;}
  .accent-btn:active { transform: translate(3px, 3px); box-shadow: 0px 0px 0px var(--border-main); }

  .feedback-zone { min-height: 90px; margin: 20px 0; }
  .correct-mark { font-size: 18px; font-weight: 800; color: var(--correct-color); margin-bottom: 8px; animation: blink 0.5s ease-in-out; }
  .incorrect-mark { font-size: 18px; font-weight: 800; color: var(--incorrect-color); margin-bottom: 8px; }
  
  .ru-line { font-family: var(--font-ru); font-size: 15px; color: var(--text-muted); margin-top: 12px; padding: 12px; background: var(--ru-bg); border: 2px dashed var(--border-main); line-height: 1.5; }
  .ru-line strong { color: var(--text-main); background: var(--sheet-bg); padding: 2px 6px; font-weight: 800; }
  
  @keyframes blink { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }

  /* --- STYLES ECRAN DE FIN --- */
  .result-container { text-align: center; padding: 20px; z-index: 2; position: relative; }
  .result-score { font-size: 80px; margin-bottom: 10px; font-weight: 900; -webkit-text-stroke: 2px var(--border-main); letter-spacing: -2px; }
  .result-rgb { animation: rainbow 2s linear infinite, pulse 0.5s infinite alternate; text-shadow: 0 0 15px currentColor; }
  .result-golden { color: #ffd700; text-shadow: 0 0 10px #ffd700, 0 0 20px #ff8c00; animation: pulse 1s infinite alternate; }
  .result-green { color: #10b981; text-shadow: 0 0 10px #10b981; }
  .result-orange { color: #f59e0b; text-shadow: 0 0 10px #f59e0b; }
  .result-red { color: #ef4444; text-shadow: 0 0 10px #ef4444; }
  
  .error-list { margin-top: 20px; font-size: 16px; font-weight: 700; text-align: left; background: var(--ru-bg); padding: 15px; border: 2px dashed var(--border-main); }
  .error-list ul { margin: 10px 0 0 0; padding-left: 20px; }
  .error-list li { margin-bottom: 5px; color: var(--incorrect-color); text-transform: uppercase; font-weight: 800; }
  
  @keyframes pulse { from { transform: scale(1); } to { transform: scale(1.05); } }
  @keyframes rainbow {
    0% { color: #ef4444; } 17% { color: #d946ef; } 33% { color: #3b82f6; }
    50% { color: #06b6d4; } 67% { color: #10b981; } 83% { color: #f59e0b; } 100% { color: #ef4444; }
  }
  
  /* Confettis */
  .confetti { position: absolute; width: 12px; height: 12px; opacity: 0.9; animation: fall 3s linear infinite; z-index: 1; pointer-events: none; }
  @keyframes fall { to { transform: translateY(100vh) rotate(720deg); } }

  /* --- EASTER EGG (Coeur et Pop-up) --- */
  #secret-heart { 
    position: absolute; 
    bottom: 20px; 
    left: 20px; 
    font-size: 36px; 
    color: #ff1493; 
    opacity: 0.7; 
    cursor: pointer; 
    user-select: none; 
    z-index: 100; 
    font-family: var(--font-main); 
    -webkit-text-stroke: 2px var(--border-main); 
    text-shadow: 3px 3px 0px var(--border-main); 
    transition: transform 0.1s; 
  }
  #secret-heart:active { transform: scale(0.8) translate(4px, 4px); text-shadow: 0px 0px 0px var(--border-main); }

  #love-popup { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.5); background: var(--sheet-bg); color: #ff1493; border: 6px solid #ff1493; box-shadow: 8px 8px 0px var(--border-main); padding: 20px 30px; font-size: 28px; font-weight: 900; text-align: center; z-index: 9999; opacity: 0; pointer-events: none; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  #love-popup.show { opacity: 1; transform: translate(-50%, -50%) scale(1); }

  /* ==============================================================
     ADAPTATION POUR LES GRANDS ECRANS (PC / TABLETTES)
     Le navigateur lira ces règles uniquement si l'écran est large
     ============================================================== */
  @media (min-width: 768px) {
    body { align-items: center; /* Centre la carte verticalement sur PC */ padding: 40px; }
    #sheet { max-width: 650px; margin-top: 0; margin-bottom: 0; padding: 10px; }
    #content { padding: 40px; }
    h1 { font-size: 36px; }
    .subtitle { font-size: 18px; }
    .infinitive { font-size: 32px; }
    .sentence-row { font-size: 26px; }
    #answer-input { font-size: 28px; width: 180px; }
    .chip { font-size: 16px; padding: 10px 18px; }
    .btn { font-size: 22px; padding: 16px 24px; transition: all 0.15s ease; }
    .btn:hover { background-color: var(--chip-bg); } /* Effet de survol sur PC */
    .ru-line { font-size: 18px; }
    .error-list { font-size: 20px; }
  }
</style>
</head>
<body>

<!-- MENU SANDWICH -->
<div class="top-buttons">
  <button id="hamburger-btn" class="nav-btn" aria-label="Menu">☰ MENU</button>
  <div id="dropdown-menu">
    <button id="theme-sakura" class="nav-btn" aria-label="Thème Sakura">🌸 OFF</button>
    <button id="theme-toggle" class="nav-btn" aria-label="Basculer le thème">PWR OFF</button>
    <button id="bgm-toggle" class="nav-btn" aria-label="Musique">🎵 OFF</button>
  </div>
</div>

<!-- L'Easter Egg Cliquable -->
<div id="secret-heart" aria-hidden="true">&hearts;</div>
<div id="love-popup">MOI AUSSI JE T'AIME ! &hearts;</div>

<div id="sheet"><div id="content"></div></div>

<script>
/* --- MENU SANDWICH LOGIC --- */
const hamburgerBtn = document.getElementById("hamburger-btn");
const dropdownMenu = document.getElementById("dropdown-menu");

hamburgerBtn.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("show");
  e.stopPropagation(); 
});

document.addEventListener("click", (e) => {
  if (!hamburgerBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});

/* --- THEMES (Clair, Sombre, Sakura) --- */
const themeToggleBtn = document.getElementById("theme-toggle");
const sakuraToggleBtn = document.getElementById("theme-sakura");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let currentTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

function applyTheme() {
  document.body.classList.remove("dark-mode", "sakura-mode");
  themeToggleBtn.textContent = "PWR OFF";
  themeToggleBtn.style.color = "var(--text-main)";
  sakuraToggleBtn.textContent = "🌸 OFF";
  
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleBtn.textContent = "PWR ON";
    themeToggleBtn.style.color = "var(--correct-color)";
  } else if (currentTheme === "sakura") {
    document.body.classList.add("sakura-mode");
    sakuraToggleBtn.textContent = "🌸 ON";
  }
}
applyTheme();

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
  applyTheme();
});

sakuraToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "sakura" ? "light" : "sakura";
  localStorage.setItem("theme", currentTheme);
  applyTheme();
});

/* --- MUSIC --- */
const bgmToggleBtn = document.getElementById("bgm-toggle");
const bgMusic = new Audio('music.mp3'); 
bgMusic.loop = true; bgMusic.volume = 0.3;
let isMusicPlaying = false;
bgmToggleBtn.addEventListener("click", () => {
  if (isMusicPlaying) { bgMusic.pause(); bgmToggleBtn.textContent = "🎵 OFF"; } 
  else { bgMusic.play().catch(e => console.log("music.mp3 introuvable")); bgmToggleBtn.textContent = "🎵 ON"; }
  isMusicPlaying = !isMusicPlaying;
});

/* --- AUDIO SFX --- */
let audioCtx;
function initAudio() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); if (audioCtx.state === 'suspended') audioCtx.resume(); }

function playSound(type) {
  initAudio(); const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
  osc.connect(gainNode); gainNode.connect(audioCtx.destination);
  
  const sfxVolume = 0.02; 
  
  if (type === 'correct') {
    osc.type = 'square'; osc.frequency.setValueAtTime(440, audioCtx.currentTime); osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08); 
    gainNode.gain.setValueAtTime(sfxVolume, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.3);
  } else if (type === 'incorrect') {
    osc.type = 'sawtooth'; osc.frequency.setValueAtTime(300, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);
    gainNode.gain.setValueAtTime(sfxVolume, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.3);
  } else if (type === 'victory') {
    osc.type = 'square'; gainNode.gain.setValueAtTime(sfxVolume, audioCtx.currentTime);
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => { osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.15); });
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.8);
  } else if (type === 'small_victory') {
    osc.type = 'square'; gainNode.gain.setValueAtTime(sfxVolume, audioCtx.currentTime);
    [440, 554.37, 659.25].forEach((freq, i) => { osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.15); });
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.6);
  } else if (type === 'defeat') {
    osc.type = 'sawtooth'; gainNode.gain.setValueAtTime(sfxVolume, audioCtx.currentTime);
    [329.63, 293.66, 261.63, 196.00].forEach((freq, i) => { osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.2); });
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.0);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 1.0);
  } else if (type === 'very_sad') {
    osc.type = 'triangle'; 
    osc.frequency.setValueAtTime(200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 1.5);
    gainNode.gain.setValueAtTime(sfxVolume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 1.5);
  } else if (type === 'perfect') {
    osc.type = 'square'; gainNode.gain.setValueAtTime(sfxVolume, audioCtx.currentTime);
    const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, i) => { osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.12); });
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 1.5);
    
    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) { data[i] = Math.random() * 2 - 1; }
    const noise = audioCtx.createBufferSource(); noise.buffer = buffer;
    const noiseFilter = audioCtx.createBiquadFilter(); noiseFilter.type = 'lowpass'; noiseFilter.frequency.value = 800;
    const noiseGain = audioCtx.createGain(); noiseGain.gain.setValueAtTime(sfxVolume * 0.6, audioCtx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2);
    noise.connect(noiseFilter); noiseFilter.connect(noiseGain); noiseGain.connect(audioCtx.destination);
    noise.start(audioCtx.currentTime);
  } else if (type === 'love') {
    osc.type = 'square'; gainNode.gain.setValueAtTime(sfxVolume, audioCtx.currentTime);
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, i) => { osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.1); });
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.7);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.7);
  }
}

/* --- LOGIQUE DE L'EASTER EGG --- */
const secretHeart = document.getElementById("secret-heart");
const lovePopup = document.getElementById("love-popup");
let heartCount = 0;
let popupTimeout;

secretHeart.addEventListener("click", () => {
  heartCount++;
  if (heartCount >= 10) {
    playSound('love');
    clearTimeout(popupTimeout);
    lovePopup.classList.add("show");
    
    popupTimeout = setTimeout(() => {
      lovePopup.classList.remove("show");
      heartCount = 0;
    }, 3000);
  }
});



/* DATA - MEGA BASE DE DONNEES (Sélection des verbes principaux° */
const VERBS = [
  { inf: "aller", pres: ["vais","vas","va","allons","allez","vont"], fut: "ir", pp: "allé", aux: "etre", 
    ru_conj: { present: ["иду","идёшь","идёт","идём","идёте","идут"], imparfait: ["ходил(а)","ходил(а)","ходил(а)","ходили","ходили","ходили"], futur: ["пойду","пойдёшь","пойдёт","пойдём","пойдёте","пойдут"], passeCompose: ["сходил(а)","сходил(а)","сходил(а)","сходили","сходили","сходили"], plusQueParfait: ["уже ушёл(ушла)","уже ушёл(ушла)","уже ушёл(ушла)","уже ушли","уже ушли","уже ушли"], conditionnel: ["пошёл(пошла) бы","пошёл(пошла) бы","пошёл(пошла) бы","пошли бы","пошли бы","пошли бы"] },
    ctx: { present: ["au parc.", "в парк."], imparfait: ["à l'école à pied.", "в школу пешком."], futur: ["en France.", "во Францию."], passeCompose: ["au supermarché.", "в супермаркет."], plusQueParfait: ["au supermarché.", "в супермаркет."], conditionnel: ["au cinéma avec toi.", "в кино с тобой."] } },
  { inf: "avoir", pres: ["ai","as","a","avons","avez","ont"], fut: "aur", pp: "eu", aux: "avoir", 
    ru_conj: { present: ["имею","имеешь","имеет","имеем","имеете","имеют"], imparfait: ["имел(а)","имел(а)","имел(а)","имели","имели","имели"], futur: ["буду иметь","будешь иметь","будет иметь","будем иметь","будете иметь","будут иметь"], passeCompose: ["получил(а)","получил(а)","получил(а)","получили","получили","получили"], plusQueParfait: ["уже получил(а)","уже получил(а)","уже получил(а)","уже получили","уже получили","уже получили"], conditionnel: ["имел(а) бы","имел(а) бы","имел(а) бы","имели бы","имели бы","имели бы"] },
    ctx: { present: ["une idée.", "идею."], imparfait: ["le temps.", "время."], futur: ["de la chance.", "удачу."], passeCompose: ["peur.", "испуг."], plusQueParfait: ["déjà fini.", "уже закончил(а)."], conditionnel: ["besoin d'aide.", "нужду в помощи."] } },
  { inf: "être", pres: ["suis","es","est","sommes","êtes","sont"], fut: "ser", pp: "été", aux: "avoir", 
    ru_conj: { present: ["являюсь","являешься","является","являемся","являетесь","являются"], imparfait: ["был(а)","был(а)","был(а)","были","были","были"], futur: ["буду","будешь","будет","будем","будете","будут"], passeCompose: ["побыл(а)","побыл(а)","побыл(а)","побыли","побыли","побыли"], plusQueParfait: ["уже был(а)","уже был(а)","уже был(а)","уже были","уже были","уже были"], conditionnel: ["был(а) бы","был(а) бы","был(а) бы","были бы","были бы","были бы"] },
    ctx: { present: ["en retard.", "опоздавшим."], imparfait: ["fatigué.", "уставшим."], futur: ["prêt.", "готовым."], passeCompose: ["malade.", "больным."], plusQueParfait: ["absent avant ça.", "отсутствующим до этого."], conditionnel: ["heureux.", "счастливым."] } },
  { inf: "savoir", pres: ["sais","sais","sait","savons","savez","savent"], fut: "saur", pp: "su", aux: "avoir", 
    ru_conj: { present: ["знаю","знаешь","знает","знаем","знаете","знают"], imparfait: ["знал(а)","знал(а)","знал(а)","знали","знали","знали"], futur: ["буду знать","будешь знать","будет знать","будем знать","будете знать","будут знать"], passeCompose: ["узнал(а)","узнал(а)","узнал(а)","узнали","узнали","узнали"], plusQueParfait: ["уже знал(а)","уже знал(а)","уже знал(а)","уже знали","уже знали","уже знали"], conditionnel: ["знал(а) бы","знал(а) бы","знал(а) бы","знали бы","знали бы","знали бы"] },
    ctx: { present: ["la vérité.", "правду."], imparfait: ["nager.", "плавать."], futur: ["quoi faire.", "что делать."], passeCompose: ["répondre.", "как ответить."], plusQueParfait: ["tout avant.", "всё заранее."], conditionnel: ["le faire.", "как это сделать."] } },
  { inf: "pouvoir", pres: ["peux","peux","peut","pouvons","pouvez","peuvent"], fut: "pourr", pp: "pu", aux: "avoir", 
    ru_conj: { present: ["могу","можешь","может","можем","можете","могут"], imparfait: ["мог(ла)","мог(ла)","мог(ла)","могли","могли","могли"], futur: ["смогу","сможешь","сможет","сможем","сможете","смогут"], passeCompose: ["смог(ла)","смог(ла)","смог(ла)","смогли","смогли","смогли"], plusQueParfait: ["уже мог(ла)","уже мог(ла)","уже мог(ла)","уже могли","уже могли","уже могли"], conditionnel: ["мог(ла) бы","мог(ла) бы","мог(ла) бы","могли бы","могли бы","могли бы"] },
    ctx: { present: ["venir ce soir.", "прийти сегодня вечером."], imparfait: ["dormir.", "спать."], futur: ["le faire.", "сделать это."], passeCompose: ["gagner.", "выиграть."], plusQueParfait: ["partir plus tôt.", "уйти раньше."], conditionnel: ["t'aider.", "помочь тебе."] } },
  { inf: "vouloir", pres: ["veux","veux","veut","voulons","voulez","veulent"], fut: "voudr", pp: "voulu", aux: "avoir", 
    ru_conj: { present: ["хочу","хочешь","хочет","хотим","хотите","хотят"], imparfait: ["хотел(а)","хотел(а)","хотел(а)","хотели","хотели","хотели"], futur: ["захочу","захочешь","захочет","захотим","захотите","захотят"], passeCompose: ["захотел(а)","захотел(а)","захотел(а)","захотели","захотели","захотели"], plusQueParfait: ["уже захотел(а)","уже захотел(а)","уже захотел(а)","уже захотели","уже захотели","уже захотели"], conditionnel: ["хотел(а) бы","хотел(а) бы","хотел(а) бы","хотели бы","хотели бы","хотели бы"] },
    ctx: { present: ["un café.", "кофе."], imparfait: ["partir.", "уйти."], futur: ["réussir.", "сдать."], passeCompose: ["dire la vérité.", "сказать правду."], plusQueParfait: ["tout annuler.", "всё отменить."], conditionnel: ["une glace.", "мороженое."] } },
  { inf: "devoir", pres: ["dois","dois","doit","devons","devez","doivent"], fut: "devr", pp: "dû", aux: "avoir", 
    ru_conj: { present: ["должен(на)","должен(на)","должен(на)","должны","должны","должны"], imparfait: ["был(а) должен(на)","был(а) должен(на)","был(а) должен(на)","были должны","были должны","были должны"], futur: ["буду должен(на)","будешь должен(на)","будет должен(на)","будем должны","будете должны","будут должны"], passeCompose: ["пришлось","пришлось","пришлось","пришлось","пришлось","пришлось"], plusQueParfait: ["уже должен(на) был(а)","уже должен(на) был(а)","уже должен(на) был(а)","уже были должны","уже были должны","уже были должны"], conditionnel: ["должен(на) был(а) бы","должен(на) был(а) бы","должен(на) был(а) бы","были бы должны","были бы должны","были бы должны"] },
    ctx: { present: ["travailler dur.", "много работать."], imparfait: ["rentrer.", "вернуться."], futur: ["payer.", "оплатить."], passeCompose: ["attendre.", "ждать."], plusQueParfait: ["partir avant.", "уйти раньше."], conditionnel: ["s'excuser.", "извиниться."] } },
  { inf: "valoir", pres: ["vaux","vaux","vaut","valons","valez","valent"], fut: "vaudr", pp: "valu", aux: "avoir", 
    ru_conj: { present: ["стою","стоишь","стоит","стоим","стоите","стоят"], imparfait: ["стоил(а)","стоил(а)","стоил(а)","стоили","стоили","стоили"], futur: ["буду стоить","будешь стоить","будет стоить","будем стоить","будете стоить","будут стоить"], passeCompose: ["стоил(а)","стоил(а)","стоил(а)","стоили","стоили","стоили"], plusQueParfait: ["уже стоил(а)","уже стоил(а)","уже стоил(а)","уже стоили","уже стоили","уже стоили"], conditionnel: ["стоил(а) бы","стоил(а) бы","стоил(а) бы","стоили бы","стоили бы","стоили бы"] },
    ctx: { present: ["très cher.", "очень дорого."], imparfait: ["le coup.", "того."], futur: ["mieux se taire.", "лучше промолчать."], passeCompose: ["une fortune.", "состояние."], plusQueParfait: ["plus avant.", "больше раньше."], conditionnel: ["la peine.", "усилий."] } },
  { inf: "tenir", pres: ["tiens","tiens","tient","tenons","tenez","tiennent"], fut: "tiendr", pp: "tenu", aux: "avoir", 
    ru_conj: { present: ["держу","держишь","держит","держим","держите","держат"], imparfait: ["держал(а)","держал(а)","держал(а)","держали","держали","держали"], futur: ["подержу","подержишь","подержит","подержим","подержите","подержат"], passeCompose: ["подержал(а)","подержал(а)","подержал(а)","подержали","подержали","подержали"], plusQueParfait: ["уже подержал(а)","уже подержал(а)","уже подержал(а)","уже подержали","уже подержали","уже подержали"], conditionnel: ["держал(а) бы","держал(а) бы","держал(а) бы","держали бы","держали бы","держали бы"] },
    ctx: { present: ["la porte.", "дверь."], imparfait: ["le sac.", "сумку."], futur: ["ma promesse.", "обещание."], passeCompose: ["le coup.", "удар."], plusQueParfait: ["la main.", "руку."], conditionnel: ["le rythme.", "темп."] } },
  { inf: "venir", pres: ["viens","viens","vient","venons","venez","viennent"], fut: "viendr", pp: "venu", aux: "etre", 
    ru_conj: { present: ["прихожу","приходишь","приходит","приходим","приходите","приходят"], imparfait: ["приходил(а)","приходил(а)","приходил(а)","приходили","приходили","приходили"], futur: ["приду","придёшь","придёт","придём","придёте","придут"], passeCompose: ["пришёл(пришла)","пришёл(пришла)","пришёл(пришла)","пришли","пришли","пришли"], plusQueParfait: ["уже пришёл(пришла)","уже пришёл(пришла)","уже пришёл(пришла)","уже пришли","уже пришли","уже пришли"], conditionnel: ["пришёл(пришла) бы","пришёл(пришла) бы","пришёл(пришла) бы","пришли бы","пришли бы","пришли бы"] },
    ctx: { present: ["de Paris.", "из Парижа."], imparfait: ["souvent.", "часто."], futur: ["avec nous.", "с нами."], passeCompose: ["à la fête.", "на вечеринку."], plusQueParfait: ["très tôt.", "очень рано."], conditionnel: ["avec plaisir.", "с удовольствием."] } },
  { inf: "courir", pres: ["cours","cours","court","courons","courez","courent"], fut: "courr", pp: "couru", aux: "avoir", 
    ru_conj: { present: ["бегу","бежишь","бежит","бежим","бежите","бегут"], imparfait: ["бежал(а)","бежал(а)","бежал(а)","бежали","бежали","бежали"], futur: ["побегу","побежишь","побежит","побежим","побежите","побегут"], passeCompose: ["пробежал(а)","пробежал(а)","пробежал(а)","пробежали","пробежали","пробежали"], plusQueParfait: ["уже пробежал(а)","уже пробежал(а)","уже пробежал(а)","уже пробежали","уже пробежали","уже пробежали"], conditionnel: ["побежал(а) бы","побежал(а) бы","побежал(а) бы","побежали бы","побежали бы","побежали бы"] },
    ctx: { present: ["le matin.", "утром."], imparfait: ["dans le parc.", "в парке."], futur: ["le marathon.", "марафон."], passeCompose: ["pour le train.", "на поезд."], plusQueParfait: ["vite.", "быстро."], conditionnel: ["plus vite.", "быстрее."] } },
  { inf: "cueillir", pres: ["cueille","cueilles","cueille","cueillons","cueillez","cueillent"], fut: "cueiller", pp: "cueilli", aux: "avoir", 
    ru_conj: { present: ["собираю","собираешь","собирает","собираем","собираете","собирают"], imparfait: ["собирал(а)","собирал(а)","собирал(а)","собирали","собирали","собирали"], futur: ["соберу","соберёшь","соберёт","соберём","соберёте","соберут"], passeCompose: ["собрал(а)","собрал(а)","собрал(а)","собрали","собрали","собрали"], plusQueParfait: ["уже собрал(а)","уже собрал(а)","уже собрал(а)","уже собрали","уже собрали","уже собрали"], conditionnel: ["собрал(а) бы","собрал(а) бы","собрал(а) бы","собрали бы","собрали бы","собрали бы"] },
    ctx: { present: ["des fleurs.", "цветы."], imparfait: ["des pommes.", "яблоки."], futur: ["les fruits.", "фрукты."], passeCompose: ["un bouquet.", "букет."], plusQueParfait: ["des fraises.", "клубнику."], conditionnel: ["tout ça.", "всё это."] } },
  { inf: "dormir", pres: ["dors","dors","dort","dormons","dormez","dorment"], fut: "dormir", pp: "dormi", aux: "avoir", 
    ru_conj: { present: ["сплю","спишь","спит","спим","спите","спят"], imparfait: ["спал(а)","спал(а)","спал(а)","спали","спали","спали"], futur: ["буду спать","будешь спать","будет спать","будем спать","будете спать","будут спать"], passeCompose: ["поспал(а)","поспал(а)","поспал(а)","поспали","поспали","поспали"], plusQueParfait: ["уже поспал(а)","уже поспал(а)","уже поспал(а)","уже поспали","уже поспали","уже поспали"], conditionnel: ["спал(а) бы","спал(а) бы","спал(а) бы","спали бы","спали бы","спали бы"] },
    ctx: { present: ["huit heures.", "восемь часов."], imparfait: ["profondément.", "крепко."], futur: ["toute la matinée.", "все утро."], passeCompose: ["chez un ami.", "у друга."], plusQueParfait: ["longtemps.", "долго."], conditionnel: ["mieux ici.", "здесь лучше."] } },
  { inf: "mentir", pres: ["mens","mens","ment","mentons","mentez","mentent"], fut: "mentir", pp: "menti", aux: "avoir", 
    ru_conj: { present: ["вру","врёшь","врёт","врём","врёте","врут"], imparfait: ["врал(а)","врал(а)","врал(а)","врали","врали","врали"], futur: ["совру","соврёшь","соврёт","соврём","соврёте","соврут"], passeCompose: ["соврал(а)","соврал(а)","соврал(а)","соврали","соврали","соврали"], plusQueParfait: ["уже соврал(а)","уже соврал(а)","уже соврал(а)","уже соврали","уже соврали","уже соврали"], conditionnel: ["соврал(а) бы","соврал(а) бы","соврал(а) бы","соврали бы","соврали бы","соврали бы"] },
    ctx: { present: ["par peur.", "из-за страха."], imparfait: ["tout le temps.", "всё время."], futur: ["si nécessaire.", "если нужно."], passeCompose: ["à propos du prix.", "насчет цены."], plusQueParfait: ["avant ça.", "до этого."], conditionnel: ["jamais.", "никогда."] } },
  { inf: "sentir", pres: ["sens","sens","sent","sentons","sentez","sentent"], fut: "sentir", pp: "senti", aux: "avoir", 
    ru_conj: { present: ["чувствую","чувствуешь","чувствует","чувствуем","чувствуете","чувствуют"], imparfait: ["чувствовал(а)","чувствовал(а)","чувствовал(а)","чувствовали","чувствовали","чувствовали"], futur: ["почувствую","почувствуешь","почувствует","почувствуем","почувствуете","почувствуют"], passeCompose: ["почувствовал(а)","почувствовал(а)","почувствовал(а)","почувствовали","почувствовали","почувствовали"], plusQueParfait: ["уже почувствовал(а)","уже почувствовал(а)","уже почувствовал(а)","уже почувствовали","уже почувствовали","уже почувствовали"], conditionnel: ["почувствовал(а) бы","почувствовал(а) бы","почувствовал(а) бы","почувствовали бы","почувствовали бы","почувствовали бы"] },
    ctx: { present: ["le vent.", "ветер."], imparfait: ["le danger.", "опасность."], futur: ["la différence.", "разницу."], passeCompose: ["le froid.", "холод."], plusQueParfait: ["la douleur.", "боль."], conditionnel: ["la même chose.", "то же самое."] } },
  { inf: "partir", pres: ["pars","pars","part","partons","partez","partent"], fut: "partir", pp: "parti", aux: "etre", 
    ru_conj: { present: ["уезжаю","уезжаешь","уезжает","уезжаем","уезжаете","уезжают"], imparfait: ["уезжал(а)","уезжал(а)","уезжал(а)","уезжали","уезжали","уезжали"], futur: ["уеду","уедешь","уедет","уедем","уедете","уедут"], passeCompose: ["уехал(а)","уехал(а)","уехал(а)","уехали","уехали","уехали"], plusQueParfait: ["уже уехал(а)","уже уехал(а)","уже уехал(а)","уже уехали","уже уехали","уже уехали"], conditionnel: ["уехал(а) бы","уехал(а) бы","уехал(а) бы","уехали бы","уехали бы","уехали бы"] },
    ctx: { present: ["en voyage.", "в путешествие."], imparfait: ["tôt le matin.", "рано утром."], futur: ["vivre loin.", "жить далеко."], passeCompose: ["sans dire au revoir.", "не попрощавшись."], plusQueParfait: ["avant eux.", "до них."], conditionnel: ["si possible.", "если возможно."] } },
  { inf: "sortir", pres: ["sors","sors","sort","sortons","sortez","sortent"], fut: "sortir", pp: "sorti", aux: "etre", 
    ru_conj: { present: ["выхожу","выходишь","выходит","выходим","выходите","выходят"], imparfait: ["выходил(а)","выходил(а)","выходил(а)","выходили","выходили","выходили"], futur: ["выйду","выйдешь","выйдет","выйдем","выйдете","выйдут"], passeCompose: ["вышел(вышла)","вышел(вышла)","вышел(вышла)","вышли","вышли","вышли"], plusQueParfait: ["уже вышел(вышла)","уже вышел(вышла)","уже вышел(вышла)","уже вышли","уже вышли","уже вышли"], conditionnel: ["вышел(вышла) бы","вышел(вышла) бы","вышел(вышла) бы","вышли бы","вышли бы","вышли бы"] },
    ctx: { present: ["avec des amis.", "с друзьями."], imparfait: ["tous les jours.", "каждый день."], futur: ["ce soir.", "вечером."], passeCompose: ["prendre l'air.", "подышать."], plusQueParfait: ["en premier.", "первым."], conditionnel: ["plus souvent.", "чаще."] } },
  { inf: "servir", pres: ["sers","sers","sert","servons","servez","servent"], fut: "servir", pp: "servi", aux: "avoir", 
    ru_conj: { present: ["служу","служишь","служит","служим","служите","служат"], imparfait: ["служил(а)","служил(а)","служил(а)","служили","служили","служили"], futur: ["послужу","послужишь","послужит","послужим","послужите","послужат"], passeCompose: ["подал(а)","подал(а)","подал(а)","подали","подали","подали"], plusQueParfait: ["уже подал(а)","уже подал(а)","уже подал(а)","уже подали","уже подали","уже подали"], conditionnel: ["подал(а) бы","подал(а) бы","подал(а) бы","подали бы","подали бы","подали бы"] },
    ctx: { present: ["le repas.", "еду."], imparfait: ["de guide.", "гидом."], futur: ["à quelque chose.", "для чего-то."], passeCompose: ["le vin.", "вино."], plusQueParfait: ["l'entrée.", "закуску."], conditionnel: ["le dessert.", "десерт."] } },
  { inf: "vêtir", pres: ["vêts","vêts","vêt","vêtons","vêtez","vêtent"], fut: "vêtir", pp: "vêtu", aux: "avoir", 
    ru_conj: { present: ["одеваю","одеваешь","одевает","одеваем","одеваете","одевают"], imparfait: ["одевал(а)","одевал(а)","одевал(а)","одевали","одевали","одевали"], futur: ["одену","оденешь","оденет","оденем","оденете","оденут"], passeCompose: ["одел(а)","одел(а)","одел(а)","одели","одели","одели"], plusQueParfait: ["уже одел(а)","уже одел(а)","уже одел(а)","уже одели","уже одели","уже одели"], conditionnel: ["одел(а) бы","одел(а) бы","одел(а) бы","одели бы","одели бы","одели бы"] },
    ctx: { present: ["un manteau.", "пальто."], imparfait: ["élégamment.", "элегантно."], futur: ["les enfants.", "детей."], passeCompose: ["une robe.", "платье."], plusQueParfait: ["le bébé.", "малыша."], conditionnel: ["un chapeau.", "шляпу."] } },
  { inf: "fuir", pres: ["fuis","fuis","fuit","fuyons","fuyez","fuient"], fut: "fuir", pp: "fui", aux: "avoir", 
    ru_conj: { present: ["убегаю","убегаешь","убегает","убегаем","убегаете","убегают"], imparfait: ["убегал(а)","убегал(а)","убегал(а)","убегали","убегали","убегали"], futur: ["убегу","убежишь","убежит","убежим","убежите","убегут"], passeCompose: ["сбежал(а)","сбежал(а)","сбежал(а)","сбежали","сбежали","сбежали"], plusQueParfait: ["уже сбежал(а)","уже сбежал(а)","уже сбежал(а)","уже сбежали","уже сбежали","уже сбежали"], conditionnel: ["сбежал(а) бы","сбежал(а) бы","сбежал(а) бы","сбежали бы","сбежали бы","сбежали бы"] },
    ctx: { present: ["la réalité.", "от реальности."], imparfait: ["le danger.", "от опасности."], futur: ["loin.", "далеко."], passeCompose: ["la ville.", "из города."], plusQueParfait: ["le pays.", "из страны."], conditionnel: ["vite.", "быстро."] } },
  { inf: "mourir", pres: ["meurs","meurs","meurt","mourons","mourez","meurent"], fut: "mourr", pp: "mort", aux: "etre", 
    ru_conj: { present: ["умираю","умираешь","умирает","умираем","умираете","умирают"], imparfait: ["умирал(а)","умирал(а)","умирал(а)","умирали","умирали","умирали"], futur: ["умру","умрёшь","умрёт","умрём","умрёте","умрут"], passeCompose: ["умер(ла)","умер(ла)","умер(ла)","умерли","умерли","умерли"], plusQueParfait: ["уже умер(ла)","уже умер(ла)","уже умер(ла)","уже умерли","уже умерли","уже умерли"], conditionnel: ["умер(ла) бы","умер(ла) бы","умер(ла) бы","умерли бы","умерли бы","умерли бы"] },
    ctx: { present: ["de faim.", "от голода."], imparfait: ["d'ennui.", "от скуки."], futur: ["de vieillesse.", "от старости."], passeCompose: ["hier.", "вчера."], plusQueParfait: ["avant ça.", "до этого."], conditionnel: ["pour toi.", "за тебя."] } },
  { inf: "ouvrir", pres: ["ouvre","ouvres","ouvre","ouvrons","ouvrez","ouvrent"], fut: "ouvrir", pp: "ouvert", aux: "avoir", 
    ru_conj: { present: ["открываю","открываешь","открывает","открываем","открываете","открывают"], imparfait: ["открывал(а)","открывал(а)","открывал(а)","открывали","открывали","открывали"], futur: ["открою","откроешь","откроет","откроем","откроете","откроют"], passeCompose: ["открыл(а)","открыл(а)","открыл(а)","открыли","открыли","открыли"], plusQueParfait: ["уже открыл(а)","уже открыл(а)","уже открыл(а)","уже открыли","уже открыли","уже открыли"], conditionnel: ["открыл(а) бы","открыл(а) бы","открыл(а) бы","открыли бы","открыли бы","открыли бы"] },
    ctx: { present: ["la fenêtre.", "окно."], imparfait: ["le magasin.", "магазин."], futur: ["un compte.", "счет."], passeCompose: ["la porte.", "дверь."], plusQueParfait: ["la boîte.", "коробку."], conditionnel: ["le cadeau.", "подарок."] } },
  { inf: "offrir", pres: ["offre","offres","offre","offrons","offrez","offrent"], fut: "offrir", pp: "offert", aux: "avoir", 
    ru_conj: { present: ["дарю","даришь","дарит","дарим","дарите","дарят"], imparfait: ["дарил(а)","дарил(а)","дарил(а)","дарили","дарили","дарили"], futur: ["подарю","подаришь","подарит","подарим","подарите","подарят"], passeCompose: ["подарил(а)","подарил(а)","подарил(а)","подарили","подарили","подарили"], plusQueParfait: ["уже подарил(а)","уже подарил(а)","уже подарил(а)","уже подарили","уже подарили","уже подарили"], conditionnel: ["подарил(а) бы","подарил(а) бы","подарил(а) бы","подарили бы","подарили бы","подарили бы"] },
    ctx: { present: ["un cadeau.", "подарок."], imparfait: ["le café.", "кофе."], futur: ["des fleurs.", "цветы."], passeCompose: ["une opportunité.", "возможность."], plusQueParfait: ["un livre.", "книгу."], conditionnel: ["mon aide.", "свою помощь."] } },
  { inf: "souffrir", pres: ["souffre","souffres","souffre","souffrons","souffrez","souffrent"], fut: "souffrir", pp: "souffert", aux: "avoir", 
    ru_conj: { present: ["страдаю","страдаешь","страдает","страдаем","страдаете","страдают"], imparfait: ["страдал(а)","страдал(а)","страдал(а)","страдали","страдали","страдали"], futur: ["буду страдать","будешь страдать","будет страдать","будем страдать","будете страдать","будут страдать"], passeCompose: ["пострадал(а)","пострадал(а)","пострадал(а)","пострадали","пострадали","пострадали"], plusQueParfait: ["уже пострадал(а)","уже пострадал(а)","уже пострадал(а)","уже пострадали","уже пострадали","уже пострадали"], conditionnel: ["страдал(а) бы","страдал(а) бы","страдал(а) бы","страдали бы","страдали бы","страдали бы"] },
    ctx: { present: ["de la chaleur.", "от жары."], imparfait: ["en silence.", "молча."], futur: ["des conséquences.", "от последствий."], passeCompose: ["beaucoup.", "много."], plusQueParfait: ["terriblement.", "ужасно."], conditionnel: ["moins avec ça.", "меньше с этим."] } },
  { inf: "couvrir", pres: ["couvre","couvres","couvre","couvrons","couvrez","couvrent"], fut: "couvrir", pp: "couvert", aux: "avoir", 
    ru_conj: { present: ["накрываю","накрываешь","накрывает","накрываем","накрываете","накрывают"], imparfait: ["накрывал(а)","накрывал(а)","накрывал(а)","накрывали","накрывали","накрывали"], futur: ["накрою","накроешь","накроет","накроем","накроете","накроют"], passeCompose: ["накрыл(а)","накрыл(а)","накрыл(а)","накрыли","накрыли","накрыли"], plusQueParfait: ["уже накрыл(а)","уже накрыл(а)","уже накрыл(а)","уже накрыли","уже накрыли","уже накрыли"], conditionnel: ["накрыл(а) бы","накрыл(а) бы","накрыл(а) бы","накрыли бы","накрыли бы","накрыли бы"] },
    ctx: { present: ["la table.", "стол."], imparfait: ["le lit.", "кровать."], futur: ["les frais.", "расходы."], passeCompose: ["le bruit.", "шум."], plusQueParfait: ["le sol.", "пол."], conditionnel: ["mon ami.", "моего друга."] } },
  { inf: "acquérir", pres: ["acquiers","acquiers","acquiert","acquérons","acquérez","acquièrent"], fut: "acquerr", pp: "acquis", aux: "avoir", 
    ru_conj: { present: ["приобретаю","приобретаешь","приобретает","приобретаем","приобретаете","приобретают"], imparfait: ["приобретал(а)","приобретал(а)","приобретал(а)","приобретали","приобретали","приобретали"], futur: ["приобрету","приобретёшь","приобретёт","приобретём","приобретёте","приобретут"], passeCompose: ["приобрёл(приобрела)","приобрёл(приобрела)","приобрёл(приобрела)","приобрели","приобрели","приобрели"], plusQueParfait: ["уже приобрёл(приобрела)","уже приобрёл(приобрела)","уже приобрёл(приобрела)","уже приобрели","уже приобрели","уже приобрели"], conditionnel: ["приобрёл(приобрела) бы","приобрёл(приобрела) бы","приобрёл(приобрела) бы","приобрели бы","приобрели бы","приобрели бы"] },
    ctx: { present: ["de l'expérience.", "опыт."], imparfait: ["des connaissances.", "знания."], futur: ["une maison.", "дом."], passeCompose: ["cette entreprise.", "компанию."], plusQueParfait: ["le terrain.", "землю."], conditionnel: ["ce tableau.", "эту картину."] } },
  { inf: "voir", pres: ["vois","vois","voit","voyons","voyez","voient"], fut: "verr", pp: "vu", aux: "avoir", 
    ru_conj: { present: ["вижу","видишь","видит","видим","видите","видят"], imparfait: ["видел(а)","видел(а)","видел(а)","видели","видели","видели"], futur: ["увижу","увидишь","увидит","увидим","увидите","увидят"], passeCompose: ["увидел(а)","увидел(а)","увидел(а)","увидели","увидели","увидели"], plusQueParfait: ["уже увидел(а)","уже увидел(а)","уже увидел(а)","уже увидели","уже увидели","уже увидели"], conditionnel: ["увидел(а) бы","увидел(а) бы","увидел(а) бы","увидели бы","увидели бы","увидели бы"] },
    ctx: { present: ["le paysage.", "пейзаж."], imparfait: ["mes amis.", "друзей."], futur: ["le film.", "фильм."], passeCompose: ["la mer.", "море."], plusQueParfait: ["le message.", "сообщение."], conditionnel: ["la différence.", "разницу."] } },
  { inf: "mouvoir", pres: ["meus","meus","meut","mouvons","mouvez","meuvent"], fut: "mouvr", pp: "mû", aux: "avoir", 
    ru_conj: { present: ["двигаю","двигаешь","двигает","двигаем","двигаете","двигают"], imparfait: ["двигал(а)","двигал(а)","двигал(а)","двигали","двигали","двигали"], futur: ["подвину","подвинешь","подвинет","подвинем","подвинете","подвинут"], passeCompose: ["подвинул(а)","подвинул(а)","подвинул(а)","подвинули","подвинули","подвинули"], plusQueParfait: ["уже подвинул(а)","уже подвинул(а)","уже подвинул(а)","уже подвинули","уже подвинули","уже подвинули"], conditionnel: ["подвинул(а) бы","подвинул(а) бы","подвинул(а) бы","подвинули бы","подвинули бы","подвинули бы"] },
    ctx: { present: ["ce meuble.", "эту мебель."], imparfait: ["la machine.", "машину."], futur: ["les caisses.", "ящики."], passeCompose: ["les obstacles.", "препятствия."], plusQueParfait: ["la table.", "стол."], conditionnel: ["la chaise.", "стул."] } },
  { inf: "recevoir", pres: ["reçois","reçois","reçoit","recevons","recevez","reçoivent"], fut: "recevr", pp: "reçu", aux: "avoir", 
    ru_conj: { present: ["получаю","получаешь","получает","получаем","получаете","получают"], imparfait: ["получал(а)","получал(а)","получал(а)","получали","получали","получали"], futur: ["получу","получишь","получит","получим","получите","получат"], passeCompose: ["получил(а)","получил(а)","получил(а)","получили","получили","получили"], plusQueParfait: ["уже получил(а)","уже получил(а)","уже получил(а)","уже получили","уже получили","уже получили"], conditionnel: ["получил(а) бы","получил(а) бы","получил(а) бы","получили бы","получили бы","получили бы"] },
    ctx: { present: ["un paquet.", "посылку."], imparfait: ["des lettres.", "письма."], futur: ["le salaire.", "зарплату."], passeCompose: ["une nouvelle.", "новость."], plusQueParfait: ["l'invitation.", "приглашение."], conditionnel: ["ce prix.", "этот приз."] } },
  { inf: "apercevoir", pres: ["aperçois","aperçois","aperçoit","apercevons","apercevez","aperçoivent"], fut: "apercevr", pp: "aperçu", aux: "avoir", 
    ru_conj: { present: ["замечаю","замечаешь","замечает","замечаем","замечаете","замечают"], imparfait: ["замечал(а)","замечал(а)","замечал(а)","замечали","замечали","замечали"], futur: ["замечу","заметишь","заметит","заметим","заметите","заметят"], passeCompose: ["заметил(а)","заметил(а)","заметил(а)","заметили","заметили","заметили"], plusQueParfait: ["уже заметил(а)","уже заметил(а)","уже заметил(а)","уже заметили","уже заметили","уже заметили"], conditionnel: ["заметил(а) бы","заметил(а) бы","заметил(а) бы","заметили бы","заметили бы","заметили бы"] },
    ctx: { present: ["un oiseau.", "птицу."], imparfait: ["le château.", "замок."], futur: ["la côte.", "берег."], passeCompose: ["l'erreur.", "ошибку."], plusQueParfait: ["le danger.", "опасность."], conditionnel: ["le détail.", "деталь."] } },
  { inf: "décevoir", pres: ["déçois","déçois","déçoit","décevons","décevez","déçoivent"], fut: "décevr", pp: "déçu", aux: "avoir", 
    ru_conj: { present: ["разочаровываю","разочаровываешь","разочаровывает","разочаровываем","разочаровываете","разочаровывают"], imparfait: ["разочаровывал(а)","разочаровывал(а)","разочаровывал(а)","разочаровывали","разочаровывали","разочаровывали"], futur: ["разочарую","разочаруешь","разочарует","разочаруем","разочаруете","разочаруют"], passeCompose: ["разочаровал(а)","разочаровал(а)","разочаровал(а)","разочаровали","разочаровали","разочаровали"], plusQueParfait: ["уже разочаровал(а)","уже разочаровал(а)","уже разочаровал(а)","уже разочаровали","уже разочаровали","уже разочаровали"], conditionnel: ["разочаровал(а) бы","разочаровал(а) бы","разочаровал(а) бы","разочаровали бы","разочаровали бы","разочаровали бы"] },
    ctx: { present: ["ses parents.", "родителей."], imparfait: ["le public.", "публику."], futur: ["les attentes.", "ожидания."], passeCompose: ["les supporters.", "фанатов."], plusQueParfait: ["tout le monde.", "всех."], conditionnel: ["personne.", "никого."] } },
  { inf: "rendre", pres: ["rends","rends","rend","rendons","rendez","rendent"], fut: "rendr", pp: "rendu", aux: "avoir", 
    ru_conj: { present: ["возвращаю","возвращаешь","возвращает","возвращаем","возвращаете","возвращают"], imparfait: ["возвращал(а)","возвращал(а)","возвращал(а)","возвращали","возвращали","возвращали"], futur: ["верну","вернёшь","вернёт","вернём","вернёте","вернут"], passeCompose: ["вернул(а)","вернул(а)","вернул(а)","вернули","вернули","вернули"], plusQueParfait: ["уже вернул(а)","уже вернул(а)","уже вернул(а)","уже вернули","уже вернули","уже вернули"], conditionnel: ["вернул(а) бы","вернул(а) бы","вернул(а) бы","вернули бы","вернули бы","вернули бы"] },
    ctx: { present: ["le livre.", "книгу."], imparfait: ["service.", "услугу."], futur: ["l'argent.", "деньги."], passeCompose: ["le travail.", "работу."], plusQueParfait: ["les clés.", "ключи."], conditionnel: ["le sourire.", "улыбку."] } },
  { inf: "vendre", pres: ["vends","vends","vend","vendons","vendez","vendent"], fut: "vendr", pp: "vendu", aux: "avoir", 
    ru_conj: { present: ["продаю","продаёшь","продаёт","продаём","продаёте","продают"], imparfait: ["продавал(а)","продавал(а)","продавал(а)","продавали","продавали","продавали"], futur: ["продам","продашь","продаст","продадим","продадите","продадут"], passeCompose: ["продал(а)","продал(а)","продал(а)","продали","продали","продали"], plusQueParfait: ["уже продал(а)","уже продал(а)","уже продал(а)","уже продали","уже продали","уже продали"], conditionnel: ["продал(а) бы","продал(а) бы","продал(а) бы","продали бы","продали бы","продали бы"] },
    ctx: { present: ["la voiture.", "машину."], imparfait: ["des fruits.", "фрукты."], futur: ["la maison.", "дом."], passeCompose: ["les billets.", "билеты."], plusQueParfait: ["le vélo.", "велосипед."], conditionnel: ["tout.", "всё."] } },
  { inf: "attendre", pres: ["attends","attends","attend","attendons","attendez","attendent"], fut: "attendr", pp: "attendu", aux: "avoir", 
    ru_conj: { present: ["жду","ждёшь","ждёт","ждём","ждёте","ждут"], imparfait: ["ждал(а)","ждал(а)","ждал(а)","ждали","ждали","ждали"], futur: ["подожду","подождёшь","подождёт","подождём","подождёте","подождут"], passeCompose: ["подождал(а)","подождал(а)","подождал(а)","подождали","подождали","подождали"], plusQueParfait: ["уже подождал(а)","уже подождал(а)","уже подождал(а)","уже подождали","уже подождали","уже подождали"], conditionnel: ["подождал(а) бы","подождал(а) бы","подождал(а) бы","подождали бы","подождали бы","подождали бы"] },
    ctx: { present: ["le train.", "поезд."], imparfait: ["dans la file.", "в очереди."], futur: ["ici.", "здесь."], passeCompose: ["deux heures.", "два часа."], plusQueParfait: ["longtemps.", "долго."], conditionnel: ["patiemment.", "терпеливо."] } },
  { inf: "descendre", pres: ["descends","descends","descend","descendons","descendez","descendent"], fut: "descendr", pp: "descendu", aux: "etre", 
    ru_conj: { present: ["спускаюсь","спускаешься","спускается","спускаемся","спускаетесь","спускаются"], imparfait: ["спускался(лась)","спускался(лась)","спускался(лась)","спускались","спускались","спускались"], futur: ["спущусь","спустишься","спустится","спустимся","спуститесь","спустятся"], passeCompose: ["спустился(лась)","спустился(лась)","спустился(лась)","спустились","спустились","спустились"], plusQueParfait: ["уже спустился(лась)","уже спустился(лась)","уже спустился(лась)","уже спустились","уже спустились","уже спустились"], conditionnel: ["спустился(лась) бы","спустился(лась) бы","спустился(лась) бы","спустились бы","спустились бы","спустились бы"] },
    ctx: { present: ["l'escalier.", "по лестнице."], imparfait: ["rapidement.", "быстро."], futur: ["à la station.", "на станции."], passeCompose: ["dans la cave.", "в подвал."], plusQueParfait: ["en premier.", "первым."], conditionnel: ["plus bas.", "ниже."] } },
  { inf: "perdre", pres: ["perds","perds","perd","perdons","perdez","perdent"], fut: "perdr", pp: "perdu", aux: "avoir", 
    ru_conj: { present: ["теряю","теряешь","теряет","теряем","теряете","теряют"], imparfait: ["терял(а)","терял(а)","терял(а)","теряли","теряли","теряли"], futur: ["потеряю","потеряешь","потеряет","потеряем","потеряете","потеряют"], passeCompose: ["потерял(а)","потерял(а)","потерял(а)","потеряли","потеряли","потеряли"], plusQueParfait: ["уже потерял(а)","уже потерял(а)","уже потерял(а)","уже потеряли","уже потеряли","уже потеряли"], conditionnel: ["потерял(а) бы","потерял(а) бы","потерял(а) бы","потеряли бы","потеряли бы","потеряли бы"] },
    ctx: { present: ["du temps.", "время."], imparfait: ["le match.", "матч."], futur: ["mes clés.", "ключи."], passeCompose: ["de l'argent.", "деньги."], plusQueParfait: ["la carte.", "карту."], conditionnel: ["espoir.", "надежду."] } },
  { inf: "répondre", pres: ["réponds","réponds","répond","répondons","répondez","répondent"], fut: "répondr", pp: "répondu", aux: "avoir", 
    ru_conj: { present: ["отвечаю","отвечаешь","отвечает","отвечаем","отвечаете","отвечают"], imparfait: ["отвечал(а)","отвечал(а)","отвечал(а)","отвечали","отвечали","отвечали"], futur: ["отвечу","ответишь","ответит","ответим","ответите","ответят"], passeCompose: ["ответил(а)","ответил(а)","ответил(а)","ответили","ответили","ответили"], plusQueParfait: ["уже ответил(а)","уже ответил(а)","уже ответил(а)","уже ответили","уже ответили","уже ответили"], conditionnel: ["ответил(а) бы","ответил(а) бы","ответил(а) бы","ответили бы","ответили бы","ответили бы"] },
    ctx: { present: ["au téléphone.", "на телефон."], imparfait: ["poliment.", "вежливо."], futur: ["au courrier.", "на почту."], passeCompose: ["à la question.", "на вопрос."], plusQueParfait: ["à l'email.", "на email."], conditionnel: ["la même chose.", "то же самое."] } },
  { inf: "craindre", pres: ["crains","crains","craint","craignons","craignez","craignent"], fut: "craindr", pp: "craint", aux: "avoir", 
    ru_conj: { present: ["боюсь","боишься","боится","боимся","боитесь","боятся"], imparfait: ["боялся(лась)","боялся(лась)","боялся(лась)","боялись","боялись","боялись"], futur: ["буду бояться","будешь бояться","будет бояться","будем бояться","будете бояться","будут бояться"], passeCompose: ["испугался(лась)","испугался(лась)","испугался(лась)","испугались","испугались","испугались"], plusQueParfait: ["уже испугался(лась)","уже испугался(лась)","уже испугался(лась)","уже испугались","уже испугались","уже испугались"], conditionnel: ["боялся(лась) бы","боялся(лась) бы","боялся(лась) бы","боялись бы","боялись бы","боялись бы"] },
    ctx: { present: ["le pire.", "худшего."], imparfait: ["la tempête.", "бури."], futur: ["les conséquences.", "последствий."], passeCompose: ["le froid.", "холода."], plusQueParfait: ["la réaction.", "реакции."], conditionnel: ["pour rien.", "напрасно."] } },
  { inf: "atteindre", pres: ["atteins","atteins","atteint","atteignons","atteignez","atteignent"], fut: "atteindr", pp: "atteint", aux: "avoir", 
    ru_conj: { present: ["достигаю","достигаешь","достигает","достигаем","достигаете","достигают"], imparfait: ["достигал(а)","достигал(а)","достигал(а)","достигали","достигали","достигали"], futur: ["достигну","достигнешь","достигнет","достигнем","достигнете","достигнут"], passeCompose: ["достиг(ла)","достиг(ла)","достиг(ла)","достигли","достигли","достигли"], plusQueParfait: ["уже достиг(ла)","уже достиг(ла)","уже достиг(ла)","уже достигли","уже достигли","уже достигли"], conditionnel: ["достиг(ла) бы","достиг(ла) бы","достиг(ла) бы","достигли бы","достигли бы","достигли бы"] },
    ctx: { present: ["le sommet.", "вершины."], imparfait: ["l'objectif.", "цели."], futur: ["le but.", "цели."], passeCompose: ["la limite.", "предела."], plusQueParfait: ["la perfection.", "совершенства."], conditionnel: ["ce niveau.", "этого уровня."] } },
  { inf: "peindre", pres: ["peins","peins","peint","peignons","peignez","peignent"], fut: "peindr", pp: "peint", aux: "avoir", 
    ru_conj: { present: ["крашу","красишь","красит","красим","красите","красят"], imparfait: ["красил(а)","красил(а)","красил(а)","красили","красили","красили"], futur: ["покрашу","покрасишь","покрасит","покрасим","покрасите","покрасят"], passeCompose: ["покрасил(а)","покрасил(а)","покрасил(а)","покрасили","покрасили","покрасили"], plusQueParfait: ["уже покрасил(а)","уже покрасил(а)","уже покрасил(а)","уже покрасили","уже покрасили","уже покрасили"], conditionnel: ["покрасил(а) бы","покрасил(а) бы","покрасил(а) бы","покрасили бы","покрасили бы","покрасили бы"] },
    ctx: { present: ["un tableau.", "картину."], imparfait: ["le mur.", "стену."], futur: ["la porte.", "дверь."], passeCompose: ["un paysage.", "пейзаж."], plusQueParfait: ["la chambre.", "комнату."], conditionnel: ["en bleu.", "в синий."] } },
  { inf: "joindre", pres: ["joins","joins","joint","joignons","joignez","joignent"], fut: "joindr", pp: "joint", aux: "avoir", 
    ru_conj: { present: ["присоединяю","присоединяешь","присоединяет","присоединяем","присоединяете","присоединяют"], imparfait: ["присоединял(а)","присоединял(а)","присоединял(а)","присоединяли","присоединяли","присоединяли"], futur: ["присоединю","присоединишь","присоединит","присоединим","присоедините","присоединят"], passeCompose: ["присоединил(а)","присоединил(а)","присоединил(а)","присоединили","присоединили","присоединили"], plusQueParfait: ["уже присоединил(а)","уже присоединил(а)","уже присоединил(а)","уже присоединили","уже присоединили","уже присоединили"], conditionnel: ["присоединил(а) бы","присоединил(а) бы","присоединил(а) бы","присоединили бы","присоединили бы","присоединили бы"] },
    ctx: { present: ["le groupe.", "к группе."], imparfait: ["le fichier.", "файл."], futur: ["par téléphone.", "по телефону."], passeCompose: ["les deux bouts.", "концы с концами."], plusQueParfait: ["le document.", "документ."], conditionnel: ["l'équipe.", "команду."] } },
  { inf: "prendre", pres: ["prends","prends","prend","prenons","prenez","prennent"], fut: "prendr", pp: "pris", aux: "avoir", 
    ru_conj: { present: ["беру","берёшь","берёт","берём","берёте","берут"], imparfait: ["брал(а)","брал(а)","брал(а)","брали","брали","брали"], futur: ["возьму","возьмёшь","возьмёт","возьмём","возьмёте","возьмут"], passeCompose: ["взял(а)","взял(а)","взял(а)","взяли","взяли","взяли"], plusQueParfait: ["уже взял(а)","уже взял(а)","уже взял(а)","уже взяли","уже взяли","уже взяли"], conditionnel: ["взял(а) бы","взял(а) бы","взял(а) бы","взяли бы","взяли бы","взяли бы"] },
    ctx: { present: ["le petit déjeuner.", "завтрак."], imparfait: ["des photos.", "фото."], futur: ["une décision.", "решение."], passeCompose: ["le train.", "поезд."], plusQueParfait: ["le sac.", "сумку."], conditionnel: ["mon temps.", "свое время."] } },
  { inf: "mettre", pres: ["mets","mets","met","mettons","mettez","mettent"], fut: "mettr", pp: "mis", aux: "avoir", 
    ru_conj: { present: ["кладу","кладёшь","кладёт","кладём","кладёте","кладут"], imparfait: ["клал(а)","клал(а)","клал(а)","клали","клали","клали"], futur: ["положу","положишь","положит","положим","положите","положат"], passeCompose: ["положил(а)","положил(а)","положил(а)","положили","положили","положили"], plusQueParfait: ["уже положил(а)","уже положил(а)","уже положил(а)","уже положили","уже положили","уже положили"], conditionnel: ["положил(а) бы","положил(а) бы","положил(а) бы","положили бы","положили бы","положили бы"] },
    ctx: { present: ["la table.", "на стол."], imparfait: ["un manteau.", "пальто."], futur: ["du temps.", "время."], passeCompose: ["les clés.", "ключи."], plusQueParfait: ["le livre ici.", "книгу здесь."], conditionnel: ["une veste.", "куртку."] } },
  { inf: "battre", pres: ["bats","bats","bat","battons","battez","battent"], fut: "battr", pp: "battu", aux: "avoir", 
    ru_conj: { present: ["бью","бьёшь","бьёт","бьём","бьёте","бьют"], imparfait: ["бил(а)","бил(а)","бил(а)","били","били","били"], futur: ["побью","побьёшь","побьёт","побьём","побьёте","побьют"], passeCompose: ["побил(а)","побил(а)","побил(а)","побили","побили","побили"], plusQueParfait: ["уже побил(а)","уже побил(а)","уже побил(а)","уже побили","уже побили","уже побили"], conditionnel: ["побил(а) бы","побил(а) бы","побил(а) бы","побили бы","побили бы","побили бы"] },
    ctx: { present: ["le record.", "рекорд."], imparfait: ["fortement.", "сильно."], futur: ["l'équipe.", "команду."], passeCompose: ["le tapis.", "ковер."], plusQueParfait: ["son propre score.", "свой счет."], conditionnel: ["des ailes.", "крыльями."] } },
  { inf: "rompre", pres: ["romps","romps","rompt","rompons","rompez","rompent"], fut: "rompr", pp: "rompu", aux: "avoir", 
    ru_conj: { present: ["разрываю","разрываешь","разрывает","разрываем","разрываете","разрывают"], imparfait: ["разрывал(а)","разрывал(а)","разрывал(а)","разрывали","разрывали","разрывали"], futur: ["разорву","разорвёшь","разорвёт","разорвём","разорвёте","разорвут"], passeCompose: ["разорвал(а)","разорвал(а)","разорвал(а)","разорвали","разорвали","разорвали"], plusQueParfait: ["уже разорвал(а)","уже разорвал(а)","уже разорвал(а)","уже разорвали","уже разорвали","уже разорвали"], conditionnel: ["разорвал(а) бы","разорвал(а) бы","разорвал(а) бы","разорвали бы","разорвали бы","разорвали бы"] },
    ctx: { present: ["le silence.", "молчание."], imparfait: ["le contrat.", "контракт."], futur: ["avec le passé.", "с прошлым."], passeCompose: ["le pain.", "хлеб."], plusQueParfait: ["la corde.", "веревку."], conditionnel: ["l'accord.", "соглашение."] } },
  { inf: "vaincre", pres: ["vaincs","vaincs","vainc","vainquons","vainquez","vainquent"], fut: "vaincr", pp: "vaincu", aux: "avoir", 
    ru_conj: { present: ["побеждаю","побеждаешь","побеждает","побеждаем","побеждаете","побеждают"], imparfait: ["побеждал(а)","побеждал(а)","побеждал(а)","побеждали","побеждали","побеждали"], futur: ["побежу","победишь","победит","победим","победите","победят"], passeCompose: ["победил(а)","победил(а)","победил(а)","победили","победили","победили"], plusQueParfait: ["уже победил(а)","уже победил(а)","уже победил(а)","уже победили","уже победили","уже победили"], conditionnel: ["победил(а) бы","победил(а) бы","победил(а) бы","победили бы","победили бы","победили бы"] },
    ctx: { present: ["la peur.", "страх."], imparfait: ["l'ennemi.", "врага."], futur: ["la maladie.", "болезнь."], passeCompose: ["les difficultés.", "трудности."], plusQueParfait: ["le monstre.", "монстра."], conditionnel: ["facilement.", "легко."] } },
  { inf: "conduire", pres: ["conduis","conduis","conduit","conduisons","conduisez","conduisent"], fut: "conduir", pp: "conduit", aux: "avoir", 
    ru_conj: { present: ["веду","ведёшь","ведёт","ведём","ведёте","ведут"], imparfait: ["вёл(вела)","вёл(вела)","вёл(вела)","вели","вели","вели"], futur: ["поведу","поведёшь","поведёт","поведём","поведёте","поведут"], passeCompose: ["отвёз(отвезла)","отвёз(отвезла)","отвёз(отвезла)","отвезли","отвезли","отвезли"], plusQueParfait: ["уже отвёз(отвезла)","уже отвёз(отвезла)","уже отвёз(отвезла)","уже отвезли","уже отвезли","уже отвезли"], conditionnel: ["повел(а) бы","повел(а) бы","повел(а) бы","повели бы","повели бы","повели бы"] },
    ctx: { present: ["prudemment.", "осторожно."], imparfait: ["la voiture.", "машину."], futur: ["les enfants.", "детей."], passeCompose: ["toute la nuit.", "всю ночь."], plusQueParfait: ["très vite.", "очень быстро."], conditionnel: ["mieux que lui.", "лучше него."] } },
  { inf: "construire", pres: ["construis","construis","construit","construisons","construisez","construisent"], fut: "construir", pp: "construit", aux: "avoir", 
    ru_conj: { present: ["строю","строишь","строит","строим","строите","строят"], imparfait: ["строил(а)","строил(а)","строил(а)","строили","строили","строили"], futur: ["построю","построишь","построит","построим","построите","построят"], passeCompose: ["построил(а)","построил(а)","построил(а)","построили","построили","построили"], plusQueParfait: ["уже построил(а)","уже построил(а)","уже построил(а)","уже построили","уже построили","уже построили"], conditionnel: ["построил(а) бы","построил(а) бы","построил(а) бы","построили бы","построили бы","построили бы"] },
    ctx: { present: ["une maison.", "дом."], imparfait: ["un pont.", "мост."], futur: ["un projet.", "проект."], passeCompose: ["un mur.", "стену."], plusQueParfait: ["le toit.", "крышу."], conditionnel: ["un château.", "замок."] } },
  { inf: "cuire", pres: ["cuis","cuis","cuit","cuisons","cuisez","cuisent"], fut: "cuir", pp: "cuit", aux: "avoir", 
    ru_conj: { present: ["варю","варишь","варит","варим","варите","варят"], imparfait: ["варил(а)","варил(а)","варил(а)","варили","варили","варили"], futur: ["сварю","сваришь","сварит","сварим","сварите","сварят"], passeCompose: ["сварил(а)","сварил(а)","сварил(а)","сварили","сварили","сварили"], plusQueParfait: ["уже сварил(а)","уже сварил(а)","уже сварил(а)","уже сварили","уже сварили","уже сварили"], conditionnel: ["сварил(а) бы","сварил(а) бы","сварил(а) бы","сварили бы","сварили бы","сварили бы"] },
    ctx: { present: ["les pâtes.", "макароны."], imparfait: ["à feu doux.", "на слабом огне."], futur: ["le gâteau.", "торт."], passeCompose: ["la viande.", "мясо."], plusQueParfait: ["les légumes.", "овощи."], conditionnel: ["le poisson.", "рыбу."] } },
  { inf: "produire", pres: ["produis","produis","produit","produisons","produisez","produisent"], fut: "produir", pp: "produit", aux: "avoir", 
    ru_conj: { present: ["произвожу","производишь","производит","производим","производите","производят"], imparfait: ["производил(а)","производил(а)","производил(а)","производили","производили","производили"], futur: ["произведу","произведёшь","произведёт","произведём","произведёте","произведут"], passeCompose: ["произвёл(а)","произвёл(а)","произвёл(а)","произвели","произвели","произвели"], plusQueParfait: ["уже произвёл(а)","уже произвёл(а)","уже произвёл(а)","уже произвели","уже произвели","уже произвели"], conditionnel: ["произвёл(а) бы","произвёл(а) бы","произвёл(а) бы","произвели бы","произвели бы","произвели бы"] },
    ctx: { present: ["de l'énergie.", "энергию."], imparfait: ["un son.", "звук."], futur: ["un résultat.", "результат."], passeCompose: ["des légumes.", "овощи."], plusQueParfait: ["beaucoup.", "много."], conditionnel: ["un effet.", "эффект."] } },
  { inf: "traduire", pres: ["traduis","traduis","traduit","traduisons","traduisez","traduisent"], fut: "traduir", pp: "traduit", aux: "avoir", 
    ru_conj: { present: ["перевожу","переводишь","переводит","переводим","переводите","переводят"], imparfait: ["переводил(а)","переводил(а)","переводил(а)","переводили","переводили","переводили"], futur: ["переведу","переведёшь","переведёт","переведём","переведёте","переведут"], passeCompose: ["перевёл(а)","перевёл(а)","перевёл(а)","перевели","перевели","перевели"], plusQueParfait: ["уже перевёл(а)","уже перевёл(а)","уже перевёл(а)","уже перевели","уже перевели","уже перевели"], conditionnel: ["перевёл(а) бы","перевёл(а) бы","перевёл(а) бы","перевели бы","перевели бы","перевели бы"] },
    ctx: { present: ["le texte.", "текст."], imparfait: ["un livre.", "книгу."], futur: ["cette phrase.", "эту фразу."], passeCompose: ["l'article.", "статью."], plusQueParfait: ["le poème.", "стихотворение."], conditionnel: ["sans erreur.", "без ошибок."] } },
  { inf: "dire", pres: ["dis","dis","dit","disons","dites","disent"], fut: "dir", pp: "dit", aux: "avoir", 
    ru_conj: { present: ["говорю","говоришь","говорит","говорим","говорите","говорят"], imparfait: ["говорил(а)","говорил(а)","говорил(а)","говорили","говорили","говорили"], futur: ["скажу","скажешь","скажет","скажем","скажете","скажут"], passeCompose: ["сказал(а)","сказал(а)","сказал(а)","сказали","сказали","сказали"], plusQueParfait: ["уже сказал(а)","уже сказал(а)","уже сказал(а)","уже сказали","уже сказали","уже сказали"], conditionnel: ["сказал(а) бы","сказал(а) бы","сказал(а) бы","сказали бы","сказали бы","сказали бы"] },
    ctx: { present: ["bonjour.", "привет."], imparfait: ["la vérité.", "правду."], futur: ["le secret.", "секрет."], passeCompose: ["au revoir.", "до свидания."], plusQueParfait: ["la réponse.", "ответ."], conditionnel: ["oui sans hésiter.", "да без колебаний."] } },
  { inf: "lire", pres: ["lis","lis","lit","lisons","lisez","lisent"], fut: "lir", pp: "lu", aux: "avoir", 
    ru_conj: { present: ["читаю","читаешь","читает","читаем","читаете","читают"], imparfait: ["читал(а)","читал(а)","читал(а)","читали","читали","читали"], futur: ["прочитаю","прочитаешь","прочитает","прочитаем","прочитаете","прочитают"], passeCompose: ["прочитал(а)","прочитал(а)","прочитал(а)","прочитали","прочитали","прочитали"], plusQueParfait: ["уже прочитал(а)","уже прочитал(а)","уже прочитал(а)","уже прочитали","уже прочитали","уже прочитали"], conditionnel: ["прочитал(а) бы","прочитал(а) бы","прочитал(а) бы","прочитали бы","прочитали бы","прочитали бы"] },
    ctx: { present: ["un livre.", "книгу."], imparfait: ["le journal.", "газету."], futur: ["les instructions.", "инструкции."], passeCompose: ["une lettre.", "письмо."], plusQueParfait: ["le roman.", "роман."], conditionnel: ["plus souvent.", "чаще."] } },
  { inf: "écrire", pres: ["écris","écris","écrit","écrivons","écrivez","écrivent"], fut: "écrir", pp: "écrit", aux: "avoir", 
    ru_conj: { present: ["пишу","пишешь","пишет","пишем","пишете","пишут"], imparfait: ["писал(а)","писал(а)","писал(а)","писали","писали","писали"], futur: ["напишу","напишешь","напишет","напишем","напишете","напишут"], passeCompose: ["написал(а)","написал(а)","написал(а)","написали","написали","написали"], plusQueParfait: ["уже написал(а)","уже написал(а)","уже написал(а)","уже написали","уже написали","уже написали"], conditionnel: ["написал(а) бы","написал(а) бы","написал(а) бы","написали бы","написали бы","написали бы"] },
    ctx: { present: ["un message.", "сообщение."], imparfait: ["un poème.", "стихотворение."], futur: ["un roman.", "роман."], passeCompose: ["une carte.", "открытку."], plusQueParfait: ["l'adresse.", "адрес."], conditionnel: ["mieux que ça.", "лучше этого."] } },
  { inf: "rire", pres: ["ris","ris","rit","rions","riez","rient"], fut: "rir", pp: "ri", aux: "avoir", 
    ru_conj: { present: ["смеюсь","смеёшься","смеётся","смеёмся","смеётесь","смеются"], imparfait: ["смеялся(лась)","смеялся(лась)","смеялся(лась)","смеялись","смеялись","смеялись"], futur: ["засмеюсь","засмеёшься","засмеётся","засмеёмся","засмеётесь","засмеются"], passeCompose: ["засмеялся(лась)","засмеялся(лась)","засмеялся(лась)","засмеялись","засмеялись","засмеялись"], plusQueParfait: ["уже засмеялся(лась)","уже засмеялся(лась)","уже засмеялся(лась)","уже засмеялись","уже засмеялись","уже засмеялись"], conditionnel: ["смеялся(лась) бы","смеялся(лась) бы","смеялся(лась) бы","смеялись бы","смеялись бы","смеялись бы"] },
    ctx: { present: ["de bon cœur.", "от души."], imparfait: ["souvent.", "часто."], futur: ["beaucoup.", "много."], passeCompose: ["aux éclats.", "громко."], plusQueParfait: ["de la blague.", "над шуткой."], conditionnel: ["avec vous.", "с вами."] } },
  { inf: "suffire", pres: ["suffis","suffis","suffit","suffisons","suffisez","suffisent"], fut: "suffir", pp: "suffi", aux: "avoir", 
    ru_conj: { present: ["хватает","хватает","хватает","хватает","хватает","хватают"], imparfait: ["хватало","хватало","хватало","хватало","хватало","хватало"], futur: ["хватит","хватит","хватит","хватит","хватит","хватит"], passeCompose: ["хватило","хватило","хватило","хватило","хватило","хватило"], plusQueParfait: ["уже хватило","уже хватило","уже хватило","уже хватило","уже хватило","уже хватило"], conditionnel: ["хватило бы","хватило бы","хватило бы","хватило бы","хватило бы","хватило бы"] },
    ctx: { present: ["pour aujourd'hui.", "на сегодня."], imparfait: ["pour tout le monde.", "для всех."], futur: ["de demander.", "попросить."], passeCompose: ["pour payer.", "чтобы заплатить."], plusQueParfait: ["amplement.", "вполне."], conditionnel: ["d'un mot.", "одного слова."] } },
  { inf: "connaître", pres: ["connais","connais","connaît","connaissons","connaissez","connaissent"], fut: "connaîtr", pp: "connu", aux: "avoir", 
    ru_conj: { present: ["знаю","знаешь","знает","знаем","знаете","знают"], imparfait: ["знал(а)","знал(а)","знал(а)","знали","знали","знали"], futur: ["узнаю","узнаешь","узнает","узнаем","узнаете","узнают"], passeCompose: ["узнал(а)","узнал(а)","узнал(а)","узнали","узнали","узнали"], plusQueParfait: ["уже знал(а)","уже знал(а)","уже знал(а)","уже знали","уже знали","уже знали"], conditionnel: ["знал(а) бы","знал(а) бы","знал(а) бы","знали бы","знали бы","знали бы"] },
    ctx: { present: ["cette chanson.", "эту песню."], imparfait: ["la réponse.", "ответ."], futur: ["le résultat.", "результат."], passeCompose: ["cette personne.", "этого человека."], plusQueParfait: ["la vérité.", "правду."], conditionnel: ["la ville.", "город."] } },
  { inf: "paraître", pres: ["parais","parais","paraît","paraissons","paraissez","paraissent"], fut: "paraîtr", pp: "paru", aux: "avoir", 
    ru_conj: { present: ["кажусь","кажешься","кажется","кажемся","кажетесь","кажутся"], imparfait: ["казался(лась)","казался(лась)","казался(лась)","казались","казались","казались"], futur: ["покажусь","покажешься","покажется","покажемся","покажетесь","покажутся"], passeCompose: ["показался(лась)","показался(лась)","показался(лась)","показались","показались","показались"], plusQueParfait: ["уже показался(лась)","уже показался(лась)","уже показался(лась)","уже показались","уже показались","уже показались"], conditionnel: ["казался(лась) бы","казался(лась) бы","казался(лась) бы","казались бы","казались бы","казались бы"] },
    ctx: { present: ["fatigué.", "уставшим."], imparfait: ["évident.", "очевидным."], futur: ["mieux demain.", "лучше завтра."], passeCompose: ["dans le journal.", "в газете."], plusQueParfait: ["triste.", "грустным."], conditionnel: ["étrange.", "странным."] } },
  { inf: "naître", pres: ["nais","nais","naît","naissons","naissez","naissent"], fut: "naîtr", pp: "né", aux: "etre", 
    ru_conj: { present: ["рождаюсь","рождаешься","рождается","рождаемся","рождаетесь","рождаются"], imparfait: ["рождался(лась)","рождался(лась)","рождался(лась)","рождались","рождались","рождались"], futur: ["рожусь","родишься","родится","родимся","родитесь","родятся"], passeCompose: ["родился(лась)","родился(лась)","родился(лась)","родились","родились","родились"], plusQueParfait: ["уже родился(лась)","уже родился(лась)","уже родился(лась)","уже родились","уже родились","уже родились"], conditionnel: ["родился(лась) бы","родился(лась) бы","родился(лась) бы","родились бы","родились бы","родились бы"] },
    ctx: { present: ["en France.", "во Франции."], imparfait: ["dans une petite ville.", "в городке."], futur: ["au printemps.", "весной."], passeCompose: ["le mois dernier.", "в прошлом месяце."], plusQueParfait: ["avant la guerre.", "до войны."], conditionnel: ["plus tard.", "позже."] } },
  { inf: "croître", pres: ["croîs","croîs","croît","croissons","croissez","croissent"], fut: "croîtr", pp: "crû", aux: "avoir", 
    ru_conj: { present: ["расту","растёшь","растёт","растём","растёте","растут"], imparfait: ["рос(ла)","рос(ла)","рос(ла)","росли","росли","росли"], futur: ["вырасту","вырастешь","вырастет","вырастем","вырастете","вырастут"], passeCompose: ["вырос(ла)","вырос(ла)","вырос(ла)","выросли","выросли","выросли"], plusQueParfait: ["уже вырос(ла)","уже вырос(ла)","уже вырос(ла)","уже выросли","уже выросли","уже выросли"], conditionnel: ["вырос(ла) бы","вырос(ла) бы","вырос(ла) бы","выросли бы","выросли бы","выросли бы"] },
    ctx: { present: ["rapidement.", "быстро."], imparfait: ["lentement.", "медленно."], futur: ["en taille.", "в размере."], passeCompose: ["cette année.", "в этом году."], plusQueParfait: ["de moitié.", "наполовину."], conditionnel: ["plus vite.", "быстрее."] } }
];

const PRONOUNS = ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"];
const RU_PRONOUNS = ["Я", "Ты", "Он / Она / Мы (on)", "Мы", "Вы", "Они"];
const IMPARFAIT_END = ["ais", "ais", "ait", "ions", "iez", "aient"];
const FUTUR_END = ["ai", "as", "a", "ons", "ez", "ont"];
const AUX_PRES = { avoir: ["ai", "as", "a", "avons", "avez", "ont"], etre: ["suis", "es", "est", "sommes", "êtes", "sont"] };
const AUX_IMP = { avoir: ["avais", "avais", "avait", "avions", "aviez", "avaient"], etre: ["étais", "étais", "était", "étions", "étiez", "étaient"] };

const TENSE_LABELS = { present: "présent", imparfait: "imparfait", futur: "futur simple", passeCompose: "passé composé", plusQueParfait: "plus-que-parfait", conditionnel: "conditionnel prés." };
const TENSE_ORDER = ["present", "imparfait", "futur", "passeCompose", "plusQueParfait", "conditionnel"];

function imparfaitStem(v) { return v.inf === "être" ? "ét" : v.pres[3].replace(/ons$/, ""); }
function formatPronoun(pronoun, verbForm) {
  if (pronoun === "je") { const isVowel = /^[aeiouyhœæéèêà]/.test(verbForm.charAt(0).toLowerCase()); return isVowel ? "j'" : "je "; }
  return pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " ";
}
function getAnswers(verb, tense, idx) {
  if (tense === "present") return [verb.pres[idx]];
  if (tense === "imparfait") return [imparfaitStem(verb) + IMPARFAIT_END[idx]];
  if (tense === "futur") return [verb.fut + FUTUR_END[idx]];
  if (tense === "conditionnel") return [verb.fut + IMPARFAIT_END[idx]];
  if (tense === "passeCompose" || tense === "plusQueParfait") {
    const auxForm = tense === "passeCompose" ? AUX_PRES[verb.aux][idx] : AUX_IMP[verb.aux][idx];
    if (verb.aux === "etre") return [auxForm + " " + verb.pp, auxForm + " " + verb.pp + "e", auxForm + " " + verb.pp + "s", auxForm + " " + verb.pp + "es"];
    return [auxForm + " " + verb.pp];
  }
  return [];
}
function stripAccents(s) { return s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function normalize(s, ignoreAccents) { let t = s.trim().toLowerCase().replace(/\s+/g, " "); return ignoreAccents ? stripAccents(t) : t; }

window.insertAccent = function(char) {
  const input = document.getElementById("answer-input"); if (!input) return;
  const start = input.selectionStart, end = input.selectionEnd;
  input.value = input.value.substring(0, start) + char + input.value.substring(end);
  input.selectionStart = input.selectionEnd = start + char.length; input.focus();
};

function pickQuestion(activeTenses) {
  const tenses = TENSE_ORDER.filter((t) => activeTenses[t]); 
  const verb = VERBS[Math.floor(Math.random() * VERBS.length)];
  const tense = (tenses.length ? tenses : TENSE_ORDER)[Math.floor(Math.random() * (tenses.length || TENSE_ORDER.length))];
  const idx = Math.floor(Math.random() * 6);
  return { verb, tense, idx, answers: getAnswers(verb, tense, idx) };
}

let state = { 
  started: false, 
  ignoreAccents: false, 
  activeTenses: { present: true, imparfait: true, futur: true, passeCompose: true, plusQueParfait: false, conditionnel: false }, 
  question: null, 
  feedback: null, 
  questionCount: 0, 
  sessionScore: 0, 
  sessionErrors: [], 
  isFinished: false 
};

const content = document.getElementById("content");

function toggleTense(t) { const next = { ...state.activeTenses, [t]: !state.activeTenses[t] }; if (!Object.values(next).some(Boolean)) return; state.activeTenses = next; render(); }

function render() {
  if (!state.started) {
    content.innerHTML = `<div style="padding-top:10px;padding-bottom:10px;"><h1>Conjugaison 3e gr.</h1><p class="subtitle">► Session de 20 verbes</p><div class="section-label">SELECT. TEMPS</div><div class="chip-row" id="tense-chips">${TENSE_ORDER.map(t => `<button class="chip ${state.activeTenses[t] ? "active" : ""}" data-tense="${t}">${TENSE_LABELS[t]}</button>`).join("")}</div><div style="margin-top:28px;"><button class="btn" id="start-btn">► START SESSION ◄</button></div></div>`;
    document.querySelectorAll(".chip").forEach(btn => btn.addEventListener("click", () => toggleTense(btn.dataset.tense)));
    document.getElementById("start-btn").addEventListener("click", () => { 
      initAudio(); 
      state.questionCount = 0; 
      state.sessionScore = 0; 
      state.sessionErrors = []; 
      state.isFinished = false; 
      state.question = pickQuestion(state.activeTenses); 
      state.feedback = null; 
      state.started = true; 
      render(); 
    }); 
    return;
  }

  // ECRAN DE FIN DE SESSION
  if (state.isFinished) {
    let resultClass, message, sound;
    
    if (state.sessionScore === 20) { 
      resultClass = 'result-rgb'; message = "PARFAIT ! SCORE MAXIMAL ! INCROYABLE !"; sound = 'perfect'; 
    } else if (state.sessionScore > 17) { 
      resultClass = 'result-golden'; message = "EXCELLENT ! T'ES UN BOSS !"; sound = 'victory'; 
    } else if (state.sessionScore >= 10) { 
      resultClass = 'result-green'; message = "BIEN JOUÉ ! ENCORE UN EFFORT !"; sound = 'small_victory'; 
    } else if (state.sessionScore > 0) { 
      resultClass = 'result-orange'; message = "TU PEUX MIEUX FAIRE !"; sound = 'defeat'; 
    } else { 
      resultClass = 'result-red'; message = "RÉVISE, PUIS RETENTE TA CHANCE !"; sound = 'very_sad'; 
    }
    
    let confettiHTML = '';
    if (state.sessionScore > 17) {
        for(let i=0; i<30; i++) {
            confettiHTML += `<div class="confetti" style="left:${Math.random()*100}%; top:-20px; animation-delay:${Math.random()*2}s; background:hsl(${Math.random()*360},100%,50%)"></div>`;
        }
    }

    const uniqueErrors = [...new Set(state.sessionErrors)];
    let errorsHTML = uniqueErrors.length > 0 
      ? `<div class="error-list"><p style="color:var(--text-main); margin-top:0; font-weight:bold;">Verbes à réviser :</p><ul>${uniqueErrors.map(v => `<li>${v}</li>`).join('')}</ul></div>` 
      : `<div class="error-list"><p style="color:var(--correct-color); font-weight:bold; margin:0;">Score Parfait ! Aucun verbe à réviser.</p></div>`;

    content.innerHTML = `${confettiHTML}<div class="result-container"><p class="subtitle" style="margin-bottom:0;">SCORE FINAL</p><div class="result-score ${resultClass}">${state.sessionScore}/20</div><p class="subtitle" style="color:var(--text-main);">${message}</p>${errorsHTML}<button class="btn" id="menu-btn" style="margin-top:30px;">RETOUR MENU</button></div>`;
    
    playSound(sound);
    document.getElementById("menu-btn").addEventListener("click", () => { state.started = false; render(); });
    return;
  }

  const q = state.question; const disabled = state.feedback !== null ? "disabled" : ""; const displayPronoun = formatPronoun(PRONOUNS[q.idx], q.answers[0]);
  const frenchContext = q.verb.ctx[q.tense][0]; const russianContext = q.verb.ctx[q.tense][1];
  
  let feedbackHtml = "";
  if (state.feedback !== null) {
    const isCorrect = state.feedback === "correct";
    feedbackHtml += `<div class="${isCorrect ? 'correct-mark' : 'incorrect-mark'}">${isCorrect ? 'SUCCESS!' : 'ERROR:'} ${displayPronoun}${isCorrect ? q.answers[0] : `<u>${q.answers[0]}</u>`} ${frenchContext}</div><div class="ru-line"><em>🇷🇺 ${RU_PRONOUNS[q.idx]} <strong>[${q.verb.ru_conj[q.tense][q.idx]}]</strong> ${russianContext}</em></div>`;
  }

  const accentBar = state.feedback === null ? `<div class="accent-bar">${['é','è','ê','à','ç','î','ô'].map(char => `<button class="accent-btn" tabindex="-1" onclick="insertAccent('${char}')">${char}</button>`).join("")}</div>` : "";
  
  const btnLabel = state.feedback === null ? "VALIDATE" : (state.questionCount >= 19 ? "VOIR LE SCORE >" : "NEXT LEVEL >");

  content.innerHTML = `<div class="score-row"><div class="stats"><span>QUESTION: ${state.questionCount + 1}/20</span><span style="font-size:14px; color:var(--text-muted)">SCORE ACTUEL: ${state.sessionScore}</span></div><button class="nav-btn" id="menu-btn" style="position:static; margin:0;">QUIT</button></div><div class="hr"></div><div class="prompt-header"><span class="infinitive">${q.verb.inf}</span><span class="tense-tag"> // ${TENSE_LABELS[q.tense]}</span></div><div class="sentence-row"><span class="pronoun-label">${displayPronoun}</span><div style="display:flex; flex-direction:column;"><input type="text" id="answer-input" placeholder="___" autocapitalize="none" autocorrect="off" spellcheck="false" ${disabled} />${accentBar}</div><span class="context-label">${frenchContext}</span></div><div class="feedback-zone">${feedbackHtml}</div><button class="btn" id="action-btn">${btnLabel}</button>`;

  const input = document.getElementById("answer-input"); if (!disabled) input.focus();
  
  function validate() {
    if (state.feedback !== null) { 
      state.questionCount++;
      if (state.questionCount >= 20) {
        state.isFinished = true;
      } else {
        state.question = pickQuestion(state.activeTenses); 
      }
      state.feedback = null; 
      render(); 
      return; 
    }
    
    if (!input.value.trim()) return;
    const ok = q.answers.some(a => normalize(a, state.ignoreAccents) === normalize(input.value, state.ignoreAccents));
    
    if (ok) { 
      state.sessionScore++; 
    } else { 
      state.sessionErrors.push(q.verb.inf); 
    }
    
    state.feedback = ok ? "correct" : "incorrect"; 
    playSound(state.feedback); 
    render(); 
    document.getElementById("answer-input").value = input.value;
  }
  
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") validate(); });
  document.getElementById("action-btn").addEventListener("click", validate);
  document.getElementById("menu-btn").addEventListener("click", () => { state.started = false; render(); });
}
render();
</script>
</body>
</html>
