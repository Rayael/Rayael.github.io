# Rayael.github.io
A website only for someone.

<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>Cahier de conjugaison — 3e groupe</title>
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content="Conjugaison" />
<style>
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  :root {
    /* Theme Arcade Light (Style Gameboy / PC 90s) */
    --bg-color: #9fb8ad;
    --sheet-bg: #e0e6ed;
    --border-main: #1a1a1a;
    --text-main: #1a1a1a;
    --text-muted: #525252;
    --chip-bg: #c5d1db;
    --chip-active-bg: #1a1a1a;
    --chip-active-text: #e0e6ed;
    --input-focus: #f72585;
    --correct-color: #008a00;
    --incorrect-color: #d90429;
    --ru-bg: rgba(0, 0, 0, 0.08);
    
    --font-retro: 'VT323', 'Courier New', Courier, monospace;
    --font-ru: 'Courier New', Courier, monospace;
  }

  /* Theme Arcade Dark (Style Cyberpunk / Borne d'arcade) */
  body.dark-mode {
    --bg-color: #121212;
    --sheet-bg: #1a1a1a;
    --border-main: #00ffcc; /* Néon Cyan */
    --text-main: #f0f0f0;
    --text-muted: #8c8c8c;
    --chip-bg: #2a2a2a;
    --chip-active-bg: #00ffcc;
    --chip-active-text: #121212;
    --input-focus: #ff0055; /* Néon Rose */
    --correct-color: #39ff14; /* Néon Vert */
    --incorrect-color: #ff0055;
    --ru-bg: rgba(0, 255, 204, 0.1);
  }

  * { 
    box-sizing: border-box; 
    border-radius: 0 !important;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background: var(--bg-color);
    font-family: var(--font-retro);
    transition: background-color 0.3s ease;
    color: var(--text-main);
  }
  
  body {
    display: flex;
    justify-content: center;
    padding: 16px 8px;
  }
  
  #theme-toggle {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--sheet-bg);
    border: 3px solid var(--border-main);
    color: var(--text-main);
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
    padding: 6px 10px;
    font-family: var(--font-retro);
    box-shadow: 4px 4px 0px var(--border-main);
    transition: transform 0.1s, box-shadow 0.1s;
  }
  
  #theme-toggle:active {
    transform: translate(4px, 4px);
    box-shadow: 0px 0px 0px var(--border-main);
  }
  
  #sheet {
    position: relative;
    width: 100%;
    max-width: 480px;
    background-color: var(--sheet-bg);
    border: 4px solid var(--border-main);
    box-shadow: 8px 8px 0px var(--border-main);
    overflow: hidden;
    margin-top: 40px; 
  }
  
  #content {
    padding: 24px;
  }
  
  h1 {
    font-weight: normal;
    font-size: 36px;
    color: var(--text-main);
    margin: 0 0 10px 0;
    text-transform: uppercase;
    text-shadow: 2px 2px 0px var(--text-muted);
  }
  
  .subtitle {
    font-size: 18px;
    color: var(--text-muted);
    margin: 0 0 20px;
    line-height: 1.2;
  }
  
  .section-label {
    font-size: 20px;
    color: var(--text-main);
    text-transform: uppercase;
    margin: 24px 0 12px;
    border-bottom: 2px dashed var(--text-muted);
    display: inline-block;
  }
  
  .chip-row { display: flex; flex-wrap: wrap; gap: 12px; }
  
  .chip {
    font-size: 18px;
    padding: 6px 12px;
    border: 2px solid var(--border-main);
    background: var(--chip-bg);
    color: var(--text-main);
    cursor: pointer;
    box-shadow: 3px 3px 0px var(--border-main);
    transition: transform 0.1s, box-shadow 0.1s;
    text-transform: uppercase;
  }
  
  .chip:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px 0px var(--border-main);
  }
  
  .chip.active { 
    background: var(--chip-active-bg); 
    border-color: var(--chip-active-bg); 
    color: var(--chip-active-text); 
  }
  
  .accent-toggle {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: var(--text-muted);
    cursor: pointer;
    margin-top: 24px;
  }
  
  .accent-toggle input { 
    margin-right: 12px; 
    width: 20px; 
    height: 20px; 
    accent-color: var(--input-focus);
    border: 2px solid var(--border-main);
  }
  
  .btn {
    font-size: 22px;
    text-transform: uppercase;
    padding: 12px 20px;
    background: var(--sheet-bg);
    color: var(--text-main);
    border: 4px solid var(--border-main);
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    box-shadow: 6px 6px 0px var(--border-main);
    transition: transform 0.1s, box-shadow 0.1s, background-color 0.2s;
  }
  
  .btn:active { 
    transform: translate(6px, 6px);
    box-shadow: 0px 0px 0px var(--border-main);
  }

  .btn:hover { background: var(--chip-bg); }
  
  .score-row {
    font-size: 20px;
    color: var(--text-main);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .stats {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }
  
  .menu-link {
    background: var(--border-main);
    border: none;
    color: var(--sheet-bg);
    font-size: 18px;
    cursor: pointer;
    padding: 4px 8px;
    text-transform: uppercase;
  }
  
  .hr {
    border: none;
    border-top: 4px dotted var(--border-main);
    margin: 16px 0;
  }
  
  .prompt-header { margin-bottom: 16px; }
  .infinitive { font-size: 32px; color: var(--text-main); text-transform: uppercase; }
  .tense-tag { font-size: 20px; color: var(--text-muted); }
  
  .sentence-row {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 26px;
    color: var(--text-main);
    line-height: 1.6;
    margin-bottom: 12px;
  }
  
  .pronoun-label { color: var(--text-main); }
  
  #answer-input {
    font-family: var(--font-retro);
    font-size: 26px;
    color: var(--input-focus);
    background: transparent;
    border: none;
    border-bottom: 4px solid var(--border-main);
    padding: 4px 8px;
    width: 140px;
    text-align: center;
    transition: border-color 0.2s;
  }
  
  #answer-input::placeholder { color: var(--text-muted); font-size: 20px; }
  #answer-input:focus { outline: none; border-bottom-color: var(--input-focus); background: var(--ru-bg); }
  
  /* Barre d'accents rapides */
  .accent-bar {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    flex-wrap: wrap;
  }
  .accent-btn {
    font-family: var(--font-retro);
    background: var(--chip-bg);
    border: 2px solid var(--border-main);
    color: var(--text-main);
    font-size: 20px;
    padding: 4px 10px;
    cursor: pointer;
    box-shadow: 2px 2px 0px var(--border-main);
    transition: transform 0.1s, box-shadow 0.1s;
  }
  .accent-btn:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px var(--border-main);
  }

  .context-label { color: var(--text-main); }
  .feedback-zone { min-height: 90px; margin: 20px 0; }
  
  .correct-mark {
    font-size: 24px;
    color: var(--correct-color);
    margin-bottom: 8px;
    animation: blink 0.5s ease-in-out;
  }
  
  .incorrect-mark {
    font-size: 24px;
    color: var(--incorrect-color);
    margin-bottom: 8px;
  }
  
  .ru-line {
    font-family: var(--font-ru);
    font-size: 16px;
    color: var(--text-muted);
    margin-top: 12px;
    padding: 12px;
    background: var(--ru-bg);
    border: 2px dashed var(--border-main);
    line-height: 1.45;
  }
  
  .ru-line strong {
    color: var(--text-main);
    background: var(--sheet-bg);
    padding: 0 4px;
  }

  @keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
</style>
</head>
<body>
<button id="theme-toggle" aria-label="Basculer le thème">PWR</button>

<div id="sheet">
  <div id="content"></div>
</div>

<script>
/* ---------------------------------------------------------------
   Gestion du thème (Dark Mode)
------------------------------------------------------------------*/
const themeToggleBtn = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let isDark = localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark);

function updateTheme() {
  if (isDark) {
    document.body.classList.add("dark-mode");
    themeToggleBtn.textContent = "ON ";
    themeToggleBtn.style.color = "var(--correct-color)";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggleBtn.textContent = "OFF";
    themeToggleBtn.style.color = "var(--text-main)";
  }
}
updateTheme();

themeToggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateTheme();
});

/* ---------------------------------------------------------------
   Générateur de sons rétro
------------------------------------------------------------------*/
let audioCtx;
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playSound(type) {
  initAudio();
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  if (type === 'correct') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime); 
    osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08); 
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime); 
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
  } else {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
  }
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.3);
}

/* ---------------------------------------------------------------
   Données : verbes du 3e groupe
------------------------------------------------------------------*/
const VERBS = [
  { inf: "aller", pres: ["vais","vas","va","allons","allez","vont"], fut: "ir", pp: "allé", aux: "etre", ru: "идти", ctx: { present: ["au parc.", "в парк."], imparfait: ["à l'école à pied.", "в школу пешком."], futur: ["en France bientôt.", "во Францию скоро."], passeCompose: ["au supermarché hier.", "в супермаркет вчера."] } },
  { inf: "avoir", pres: ["ai","as","a","avons","avez","ont"], fut: "aur", pp: "eu", aux: "avoir", ru: "иметь", ctx: { present: ["une bonne idée.", "хорошую идею."], imparfait: ["beaucoup de temps.", "много времени."], futur: ["de la chance.", "удачу."], passeCompose: ["peur du chien.", "испуг из-за собаки."] } },
  { inf: "être", pres: ["suis","es","est","sommes","êtes","sont"], fut: "ser", pp: "été", aux: "avoir", ru: "быть", ctx: { present: ["en retard aujourd'hui.", "опоздавшим сегодня."], imparfait: ["très fatigué hier.", "очень уставшим вчера."], futur: ["prêt dans cinq minutes.", "готовым через пять минут."], passeCompose: ["malade ce matin.", "больным этим утром."] } },
  { inf: "savoir", pres: ["sais","sais","sait","savons","savez","savent"], fut: "saur", pp: "su", aux: "avoir", ru: "знать", ctx: { present: ["la vérité.", "правду."], imparfait: ["nager depuis longtemps.", "плавать давно."], futur: ["quoi faire demain.", "что делать завтра."], passeCompose: ["répondre à la question.", "как ответить на вопрос."] } },
  { inf: "pouvoir", pres: ["peux","peux","peut","pouvons","pouvez","peuvent"], fut: "pourr", pp: "pu", aux: "avoir", ru: "мочь", ctx: { present: ["venir ce soir.", "прийти сегодня вечером."], imparfait: ["dormir paisiblement.", "спать спокойно."], futur: ["le faire sans problème.", "сделать это без проблем."], passeCompose: ["gagner le match.", "выиграть матч."] } },
  { inf: "vouloir", pres: ["veux","veux","veut","voulons","voulez","veulent"], fut: "voudr", pp: "voulu", aux: "avoir", ru: "хотеть", ctx: { present: ["un grand café.", "большой кофе."], imparfait: ["partir plus tôt.", "уйти пораньше."], futur: ["réussir l'examen.", "сдать экзамен."], passeCompose: ["dire la vérité.", "сказать правду."] } },
  { inf: "devoir", pres: ["dois","dois","doit","devons","devez","doivent"], fut: "devr", pp: "dû", aux: "avoir", ru: "быть должным", ctx: { present: ["travailler dur.", "много работать."], imparfait: ["rentrer avant la nuit.", "вернуться до ночи."], futur: ["payer la facture.", "оплатить счет."], passeCompose: ["attendre le bus.", "ждать автобус."] } },
  { inf: "valoir", pres: ["vaux","vaux","vaut","valons","valez","valent"], fut: "vaudr", pp: "valu", aux: "avoir", ru: "стоить", ctx: { present: ["très cher.", "очень дорого."], imparfait: ["le coup d'essayer.", "того, чтобы попробовать."], futur: ["mieux ne rien dire.", "лучше промолчать."], passeCompose: ["une fortune.", "целое состояние."] } },
  { inf: "tenir", pres: ["tiens","tiens","tient","tenons","tenez","tiennent"], fut: "tiendr", pp: "tenu", aux: "avoir", ru: "держать", ctx: { present: ["la porte ouverte.", "дверь открытой."], imparfait: ["le sac fermement.", "сумку крепко."], futur: ["ma promesse.", "свое обещание."], passeCompose: ["le coup jusqu'au bout.", "продержаться до конца."] } },
  { inf: "venir", pres: ["viens","viens","vient","venons","venez","viennent"], fut: "viendr", pp: "venu", aux: "etre", ru: "приходить", ctx: { present: ["de Paris.", "из Парижа."], imparfait: ["souvent ici.", "часто сюда."], futur: ["avec nous demain.", "с нами завтра."], passeCompose: ["à la fête hier.", "на вечеринку вчера."] } },
  { inf: "courir", pres: ["cours","cours","court","courons","courez","courent"], fut: "courr", pp: "couru", aux: "avoir", ru: "бежать", ctx: { present: ["tous les matins.", "каждое утро."], imparfait: ["dans le parc.", "в парке."], futur: ["le marathon.", "марафон."], passeCompose: ["pour attraper le train.", "чтобы успеть на поезд."] } },
  { inf: "cueillir", pres: ["cueille","cueilles","cueille","cueillons","cueillez","cueillent"], fut: "cueiller", pp: "cueilli", aux: "avoir", ru: "собирать", ctx: { present: ["des fleurs.", "цветы."], imparfait: ["des pommes sucrées.", "сладкие яблоки."], futur: ["les fruits mûrs.", "спелые фрукты."], passeCompose: ["un joli bouquet.", "красивый букет."] } },
  { inf: "dormir", pres: ["dors","dors","dort","dormons","dormez","dorment"], fut: "dormir", pp: "dormi", aux: "avoir", ru: "спать", ctx: { present: ["huit heures par nuit.", "по восемь часов за ночь."], imparfait: ["profondément.", "крепко."], futur: ["toute la matinée.", "все утро."], passeCompose: ["chez un ami.", "у друга."] } },
  { inf: "mentir", pres: ["mens","mens","ment","mentons","mentez","mentent"], fut: "mentir", pp: "menti", aux: "avoir", ru: "врать", ctx: { present: ["pour se protéger.", "чтобы защитить себя."], imparfait: ["tout le temps.", "все время."], futur: ["si c'est nécessaire.", "если это необходимо."], passeCompose: ["à propos du prix.", "о цене."] } },
  { inf: "sentir", pres: ["sens","sens","sent","sentons","sentez","sentent"], fut: "sentir", pp: "senti", aux: "avoir", ru: "чувствовать", ctx: { present: ["le vent froid.", "холодный ветер."], imparfait: ["le parfum des roses.", "аромат роз."], futur: ["la différence.", "разницу."], passeCompose: ["le danger.", "опасность."] } },
  { inf: "partir", pres: ["pars","pars","part","partons","partez","partent"], fut: "partir", pp: "parti", aux: "etre", ru: "уезжать", ctx: { present: ["en voyage.", "в путешествие."], imparfait: ["très tôt le matin.", "очень рано утром."], futur: ["vivre à l'étranger.", "жить за границу."], passeCompose: ["sans dire au revoir.", "не попрощавшись."] } },
  { inf: "sortir", pres: ["sors","sors","sort","sortons","sortez","sortent"], fut: "sortir", pp: "sorti", aux: "etre", ru: "выходить", ctx: { present: ["avec des amis.", "с друзьями."], imparfait: ["tous les samedis.", "каждую субботу."], futur: ["ce soir.", "сегодня вечером."], passeCompose: ["prendre l'air.", "подышать свежим воздухом."] } },
  { inf: "servir", pres: ["sers","sers","sert","servons","servez","servent"], fut: "servir", pp: "servi", aux: "avoir", ru: "служить", ctx: { present: ["le repas chaud.", "горячую еду."], imparfait: ["de guide.", "гидом."], futur: ["à quelque chose.", "для чего-то."], passeCompose: ["le vin aux invités.", "вино гостям."] } },
  { inf: "vêtir", pres: ["vêts","vêts","vêt","vêtons","vêtez","vêtent"], fut: "vêtir", pp: "vêtu", aux: "avoir", ru: "одевать", ctx: { present: ["un manteau noir.", "черное пальто."], imparfait: ["des habits élégants.", "элегантную одежду."], futur: ["les enfants chaudement.", "детей тепло."], passeCompose: ["une belle robe.", "красивое платье."] } },
  { inf: "fuir", pres: ["fuis","fuis","fuit","fuyons","fuyez","fuient"], fut: "fuir", pp: "fui", aux: "avoir", ru: "убегать", ctx: { present: ["la reality.", "от реальности."], imparfait: ["le danger immédiat.", "от немедленной опасности."], futur: ["loin d'ici.", "далеко отсюда."], passeCompose: ["la ville en guerre.", "из города, где идет война."] } },
  { inf: "mourir", pres: ["meurs","meurs","meurt","mourons","mourez","meurent"], fut: "mourr", pp: "mort", aux: "etre", ru: "умирать", ctx: { present: ["de faim.", "от голода."], imparfait: ["d'ennui.", "от скуки."], futur: ["de vieillesse.", "от старости."], passeCompose: ["l'année dernière.", "в прошлом году."] } },
  { inf: "ouvrir", pres: ["ouvre","ouvres","ouvre","ouvrons","ouvrez","ouvrent"], fut: "ouvrir", pp: "ouvert", aux: "avoir", ru: "открывать", ctx: { present: ["la fenêtre.", "окно."], imparfait: ["le magasin à huit heures.", "магазин в восемь часов."], futur: ["un nouveau compte.", "новый счет."], passeCompose: ["la porte d'entrée.", "входную дверь."] } },
  { inf: "offrir", pres: ["offre","offres","offre","offrons","offrez","offrent"], fut: "offrir", pp: "offert", aux: "avoir", ru: "дарить", ctx: { present: ["un cadeau.", "подарок."], imparfait: ["le café tous les jours.", "кофе каждый день."], futur: ["des fleurs.", "цветы."], passeCompose: ["une belle opportunité.", "прекрасную возможность."] } },
  { inf: "souffrir", pres: ["souffre","souffres","souffre","souffrons","souffrez","souffrent"], fut: "souffrir", pp: "souffert", aux: "avoir", ru: "страдать", ctx: { present: ["de la chaleur.", "от жары."], imparfait: ["en silence.", "молча."], futur: ["des conséquences.", "от последствий."], passeCompose: ["beaucoup hier.", "сильно вчера."] } },
  { inf: "couvrir", pres: ["couvre","couvres","couvre","couvrons","couvrez","couvrent"], fut: "couvrir", pp: "couvert", aux: "avoir", ru: "накрывать", ctx: { present: ["la table.", "стол."], imparfait: ["le lit avec une couverture.", "кровать одеялом."], futur: ["les frais.", "расходы."], passeCompose: ["le bruit.", "шум."] } },
  { inf: "acquérir", pres: ["acquiers","acquiers","acquiert","acquérons","acquérez","acquièrent"], fut: "acquerr", pp: "acquis", aux: "avoir", ru: "приобретать", ctx: { present: ["de l'expérience.", "опыт."], imparfait: ["des connaissances.", "знания."], futur: ["une nouvelle maison.", "новый дом."], passeCompose: ["cette entreprise.", "эту компанию."] } },
  { inf: "voir", pres: ["vois","vois","voit","voyons","voyez","voient"], fut: "verr", pp: "vu", aux: "avoir", ru: "видеть", ctx: { present: ["un beau paysage.", "красивый пейзаж."], imparfait: ["souvent mes amis.", "часто своих друзей."], futur: ["le film demain.", "фильм завтра."], passeCompose: ["la mer pour la première fois.", "море в первый раз."] } },
  { inf: "mouvoir", pres: ["meus","meus","meut","mouvons","mouvez","meuvent"], fut: "mouvr", pp: "mû", aux: "avoir", ru: "двигать", ctx: { present: ["difficilement ce meuble.", "с трудом эту мебель."], imparfait: ["lentement la machine.", "медленно машину."], futur: ["les caisses demain.", "ящики завтра."], passeCompose: ["les obstacles.", "препятствия."] } },
  { inf: "recevoir", pres: ["reçois","reçois","reçoit","recevons","recevez","reçoivent"], fut: "recevr", pp: "reçu", aux: "avoir", ru: "получать", ctx: { present: ["un paquet.", "посылку."], imparfait: ["des lettres.", "письма."], futur: ["le salaire.", "зарплату."], passeCompose: ["une bonne nouvelle.", "хорошую новость."] } },
  { inf: "apercevoir", pres: ["aperçois","aperçois","aperçoit","apercevons","apercevez","aperçoivent"], fut: "apercevr", pp: "aperçu", aux: "avoir", ru: "замечать", ctx: { present: ["un oiseau.", "птицу."], imparfait: ["le château au loin.", "замок вдалеке."], futur: ["la côte bientôt.", "берег скоро."], passeCompose: ["l'erreur tout de suite.", "ошибку сразу же."] } },
  { inf: "décevoir", pres: ["déçois","déçois","déçoit","décevons","décevez","déçoivent"], fut: "décevr", pp: "déçu", aux: "avoir", ru: "разочаровывать", ctx: { present: ["ses parents.", "своих родителей."], imparfait: ["le public.", "публику."], futur: ["les attentes.", "ожидания."], passeCompose: ["les supporters.", "болельщиков."] } },
  { inf: "rendre", pres: ["rends","rends","rend","rendons","rendez","rendent"], fut: "rendr", pp: "rendu", aux: "avoir", ru: "возвращать", ctx: { present: ["le livre à la bibliothèque.", "книгу в библиотеку."], imparfait: ["service souvent.", "услугу часто."], futur: ["l'argent demain.", "деньги завтра."], passeCompose: ["le travail à temps.", "работу вовремя."] } },
  { inf: "vendre", pres: ["vends","vends","vend","vendons","vendez","vendent"], fut: "vendr", pp: "vendu", aux: "avoir", ru: "продавать", ctx: { present: ["la vieille voiture.", "старую машину."], imparfait: ["des fruits sur le marché.", "фрукты на рынке."], futur: ["la maison.", "дом."], passeCompose: ["tous les billets.", "все билеты."] } },
  { inf: "attendre", pres: ["attends","attends","attend","attendons","attendez","attendent"], fut: "attendr", pp: "attendu", aux: "avoir", ru: "ждать", ctx: { present: ["le train.", "поезд."], imparfait: ["dans la file.", "в очереди."], futur: ["ici.", "здесь."], passeCompose: ["plus de deux heures.", "больше двух часов."] } },
  { inf: "descendre", pres: ["descends","descends","descend","descendons","descendez","descendent"], fut: "descendr", pp: "descendu", aux: "etre", ru: "спускаться", ctx: { present: ["l'escalier.", "по лестнице."], imparfait: ["rapidement.", "быстро."], futur: ["à la prochaine station.", "на следующей станции."], passeCompose: ["dans la cave.", "в подвал."] } },
  { inf: "perdre", pres: ["perds","perds","perd","perdons","perdez","perdent"], fut: "perdr", pp: "perdu", aux: "avoir", ru: "терять", ctx: { present: ["du temps.", "время."], imparfait: ["le match.", "матч."], futur: ["mes clés.", "свои ключи."], passeCompose: ["beaucoup d'argent.", "много денег."] } },
  { inf: "répondre", pres: ["réponds","réponds","répond","répondons","répondez","répondent"], fut: "répondr", pp: "répondu", aux: "avoir", ru: "отвечать", ctx: { present: ["au téléphone.", "на телефон."], imparfait: ["poliment.", "вежливо."], futur: ["au courrier.", "на почту."], passeCompose: ["à la question.", "на вопрос."] } },
  { inf: "craindre", pres: ["crains","crains","craint","craignons","craignez","craignent"], fut: "craindr", pp: "craint", aux: "avoir", ru: "бояться", ctx: { present: ["le pire.", "худшего."], imparfait: ["la tempête.", "бури."], futur: ["les conséquences.", "последствий."], passeCompose: ["le froid.", "холода."] } },
  { inf: "atteindre", pres: ["atteins","atteins","atteint","atteignons","atteignez","atteignent"], fut: "atteindr", pp: "atteint", aux: "avoir", ru: "достигать", ctx: { present: ["le sommet.", "вершины."], imparfait: ["l'objectif.", "цели."], futur: ["le but.", "цели (в будущем)."], passeCompose: ["la limite.", "лимита."] } },
  { inf: "peindre", pres: ["peins","peins","peint","peignons","peignez","peignent"], fut: "peindr", pp: "peint", aux: "avoir", ru: "красить", ctx: { present: ["un beau tableau.", "красивую картину."], imparfait: ["le mur du salon.", "стену гостиной."], futur: ["la porte en bleu.", "дверь в синий."], passeCompose: ["un paysage.", "пейзаж."] } },
  { inf: "joindre", pres: ["joins","joins","joint","joignons","joignez","joignent"], fut: "joindr", pp: "joint", aux: "avoir", ru: "соединять", ctx: { present: ["le groupe.", "к группе."], imparfait: ["le fichier.", "файл."], futur: ["par téléphone.", "по телефону."], passeCompose: ["les deux bouts.", "концы с концами."] } },
  { inf: "prendre", pres: ["prends","prends","prend","prenons","prenez","prennent"], fut: "prendr", pp: "pris", aux: "avoir", ru: "брать", ctx: { present: ["le petit déjeuner.", "завтрак."], imparfait: ["des photos.", "фотографии."], futur: ["une décision.", "решение."], passeCompose: ["le train de nuit.", "ночной поезд."] } },
  { inf: "mettre", pres: ["mets","mets","met","mettons","mettez","mettent"], fut: "mettr", pp: "mis", aux: "avoir", ru: "класть", ctx: { present: ["la table.", "на стол."], imparfait: ["un manteau chaud.", "теплое пальто."], futur: ["du temps.", "время."], passeCompose: ["les clés sur la table.", "ключи на стол."] } },
  { inf: "battre", pres: ["bats","bats","bat","battons","battez","battent"], fut: "battr", pp: "battu", aux: "avoir", ru: "бить", ctx: { present: ["le record.", "рекорд."], imparfait: ["fortement.", "сильно."], futur: ["l'équipe adverse.", "команду противника."], passeCompose: ["le tapis dehors.", "ковер на улице."] } },
  { inf: "rompre", pres: ["romps","romps","rompt","rompons","rompez","rompent"], fut: "rompr", pp: "rompu", aux: "avoir", ru: "разрывать", ctx: { present: ["le silence.", "молчание."], imparfait: ["le contrat.", "контракт."], futur: ["avec le passé.", "с прошлым."], passeCompose: ["le pain.", "хлеб."] } },
  { inf: "vaincre", pres: ["vaincs","vaincs","vainc","vainquons","vainquez","vainquent"], fut: "vaincr", pp: "vaincu", aux: "avoir", ru: "побеждать", ctx: { present: ["la peur.", "страх."], imparfait: ["l'ennemi.", "врага."], futur: ["la maladie.", "болезнь."], passeCompose: ["les difficultés.", "трудности."] } },
  { inf: "conduire", pres: ["conduis","conduis","conduit","conduisons","conduisez","conduisent"], fut: "conduir", pp: "conduit", aux: "avoir", ru: "вести", ctx: { present: ["prudemment.", "осторожно."], imparfait: ["la voiture bleue.", "синюю машину."], futur: ["les enfants à l'école.", "детей в школу."], passeCompose: ["toute la nuit.", "всю ночь."] } },
  { inf: "construire", pres: ["construis","construis","construit","construisons","construisez","construisent"], fut: "construir", pp: "construit", aux: "avoir", ru: "строить", ctx: { present: ["une maison.", "дом."], imparfait: ["un pont.", "мост."], futur: ["un nouveau projet.", "новый проект."], passeCompose: ["un mur.", "стену."] } },
  { inf: "cuire", pres: ["cuis","cuis","cuit","cuisons","cuisez","cuisent"], fut: "cuir", pp: "cuit", aux: "avoir", ru: "готовить", ctx: { present: ["les pâtes.", "пасту."], imparfait: ["à feu doux.", "на медленном огне."], futur: ["le gâteau.", "торт."], passeCompose: ["la viande.", "мясо."] } },
  { inf: "produire", pres: ["produis","produis","produit","produisons","produisez","produisent"], fut: "produir", pp: "produit", aux: "avoir", ru: "производить", ctx: { present: ["de l'énergie.", "энергию."], imparfait: ["un son étrange.", "странный звук."], futur: ["un bon résultat.", "хороший результат."], passeCompose: ["des légumes.", "овощи."] } },
  { inf: "traduire", pres: ["traduis","traduis","traduit","traduisons","traduisez","traduisent"], fut: "traduir", pp: "traduit", aux: "avoir", ru: "переводить", ctx: { present: ["le texte en français.", "текст на французский."], imparfait: ["un livre ancien.", "старую книгу."], futur: ["cette phrase.", "эту фразу."], passeCompose: ["l'article.", "статью."] } },
  { inf: "dire", pres: ["dis","dis","dit","disons","dites","disent"], fut: "dir", pp: "dit", aux: "avoir", ru: "сказать", ctx: { present: ["bonjour.", "привет."], imparfait: ["la vérité.", "правду."], futur: ["le secret.", "секрет."], passeCompose: ["au revoir.", "до свидания."] } },
  { inf: "lire", pres: ["lis","lis","lit","lisons","lisez","lisent"], fut: "lir", pp: "lu", aux: "avoir", ru: "читать", ctx: { present: ["un bon livre.", "хорошую книгу."], imparfait: ["le journal chaque matin.", "газету каждое утро."], futur: ["les instructions.", "инструкции."], passeCompose: ["une lettre.", "письмо."] } },
  { inf: "écrire", pres: ["écris","écris","écrit","écrivons","écrivez","écrivent"], fut: "écrir", pp: "écrit", aux: "avoir", ru: "писать", ctx: { present: ["un message.", "сообщение."], imparfait: ["un poème.", "стихотворение."], futur: ["un roman.", "роман."], passeCompose: ["une carte postale.", "открытку."] } },
  { inf: "rire", pres: ["ris","ris","rit","rions","riez","rient"], fut: "rir", pp: "ri", aux: "avoir", ru: "смеяться", ctx: { present: ["de bon cœur.", "от души."], imparfait: ["souvent avec eux.", "часто с ними."], futur: ["beaucoup.", "много."], passeCompose: ["aux éclats.", "громко."] } },
  { inf: "suffire", pres: ["suffis","suffis","suffit","suffisons","suffisez","suffisent"], fut: "suffir", pp: "suffi", aux: "avoir", ru: "быть достаточным", ctx: { present: ["pour aujourd'hui.", "на сегодня."], imparfait: ["pour tout le monde.", "для всех."], futur: ["de demander.", "попросить."], passeCompose: ["pour payer.", "чтобы заплатить."] } },
  { inf: "connaître", pres: ["connais","connais","connaît","connaissons","connaissez","connaissent"], fut: "connaîtr", pp: "connu", aux: "avoir", ru: "знать", ctx: { present: ["cette chanson.", "эту песню."], imparfait: ["la réponse.", "ответ."], futur: ["le résultat.", "результат."], passeCompose: ["cette personne.", "этого человека."] } },
  { inf: "paraître", pres: ["parais","parais","paraît","paraissons","paraissez","paraissent"], fut: "paraîtr", pp: "paru", aux: "avoir", ru: "казаться", ctx: { present: ["fatigué.", "уставшим."], imparfait: ["évident.", "очевидным."], futur: ["mieux demain.", "лучше завтра."], passeCompose: ["dans le journal.", "в газете."] } },
  { inf: "naître", pres: ["nais","nais","naît","naissons","naissez","naissent"], fut: "naîtr", pp: "né", aux: "etre", ru: "рождаться", ctx: { present: ["en France.", "во Франции."], imparfait: ["dans une petite ville.", "в маленьком городке."], futur: ["au printemps.", "весной."], passeCompose: ["le mois dernier.", "в прошлом месяце."] } },
  { inf: "croître", pres: ["croîs","croîs","croît","croissons","croissez","croissent"], fut: "croîtr", pp: "crû", aux: "avoir", ru: "расти", ctx: { present: ["rapidement.", "быстро."], imparfait: ["lentement.", "медленно."], futur: ["en taille.", "в размере."], passeCompose: ["cette année.", "в этом году."] } },
  { inf: "résoudre", pres: ["résous","résous","résout","résolvons","résolvez","résolvent"], fut: "résoudr", pp: "résolu", aux: "avoir", ru: "решать", ctx: { present: ["le problème.", "проблему."], imparfait: ["l'énigme.", "загадку."], futur: ["la situation.", "ситуацию."], passeCompose: ["le conflit.", "конфликт."] } },
  { inf: "coudre", pres: ["couds","couds","coud","cousons","cousez","cousent"], fut: "coudr", pp: "cousu", aux: "avoir", ru: "шить", ctx: { present: ["un bouton.", "пуговицу."], imparfait: ["une robe.", "платье."], futur: ["un ourlet.", "подол."], passeCompose: ["le pantalon déchiré.", "порванные штаны."] } },
  { inf: "moudre", pres: ["mouds","mouds","moud","moulons","moulez","moulent"], fut: "moudr", pp: "moulu", aux: "avoir", ru: "молоть", ctx: { present: ["le café.", "кофе."], imparfait: ["le grain finement.", "зерно мелко."], futur: ["le poivre.", "перец."], passeCompose: ["les épices.", "специи."] } },
  { inf: "vivre", pres: ["vis","vis","vit","vivons","vivez","vivent"], fut: "vivr", pp: "vécu", aux: "avoir", ru: "жить", ctx: { present: ["à Paris.", "в Париже."], imparfait: ["heureux.", "счастливо."], futur: ["à la campagne.", "в деревне."], passeCompose: ["une belle aventure.", "прекрасное приключение."] } },
  { inf: "suivre", pres: ["suis","suis","suit","suivons","suivez","suivent"], fut: "suivr", pp: "suivi", aux: "avoir", ru: "следовать", ctx: { present: ["le chemin.", "по пути."], imparfait: ["le guide.", "за гидом."], futur: ["les conseils.", "советам."], passeCompose: ["le cours d'anglais.", "курс английского."] } },
  { inf: "croire", pres: ["crois","crois","croit","croyons","croyez","croient"], fut: "croir", pp: "cru", aux: "avoir", ru: "верить", ctx: { present: ["en moi.", "в меня."], imparfait: ["au Père Noël.", "в Деда Мороза."], futur: ["cette histoire.", "в эту историю."], passeCompose: ["qu'il faisait beau.", "что было хорошая погода."] } },
  { inf: "boire", pres: ["bois","bois","boit","buvons","buvez","boivent"], fut: "boir", pp: "bu", aux: "avoir", ru: "пить", ctx: { present: ["de l'eau.", "воду."], imparfait: ["du thé chaud.", "горячий чай."], futur: ["un jus de fruit.", "фруктовый сок."], passeCompose: ["trop de café.", "слишком много кофе."] } },
  { inf: "plaire", pres: ["plais","plais","plaît","plaisons","plaisez","plaisent"], fut: "plair", pp: "plu", aux: "avoir", ru: "нравиться", ctx: { present: ["à tout le monde.", "всем."], imparfait: ["au professeur.", "учителю."], futur: ["à la foule.", "толпе."], passeCompose: ["beaucoup.", "очень."] } },
  { inf: "taire", pres: ["tais","tais","tait","taisons","taisez","taisent"], fut: "tair", pp: "tu", aux: "avoir", ru: "молчать", ctx: { present: ["le secret.", "секрет."], imparfait: ["la vérité par peur.", "правду из страха."], futur: ["ce détail.", "эту деталь."], passeCompose: ["les rumeurs.", "слухи."] } },
  { inf: "faire", pres: ["fais","fais","fait","faisons","faites","font"], fut: "fer", pp: "fait", aux: "avoir", ru: "делать", ctx: { present: ["le ménage.", "уборку."], imparfait: ["du sport.", "спорт."], futur: ["un gâteau.", "торт."], passeCompose: ["les courses.", "покупки."] } },
];

const PRONOUNS = ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"];
const RU_PRONOUNS = ["Я", "Ты", "Он / Она / Мы (on)", "Мы", "Вы", "Они"];

const IMPARFAIT_END = ["ais", "ais", "ait", "ions", "iez", "aient"];
const FUTUR_END = ["ai", "as", "a", "ons", "ez", "ont"];
const AUX_PRES = {
  avoir: ["ai", "as", "a", "avons", "avez", "ont"],
  etre: ["suis", "es", "est", "sommes", "êtes", "sont"],
};
const TENSE_LABELS = {
  present: "présent",
  imparfait: "imparfait",
  futur: "futur simple",
  passeCompose: "passé composé",
};
const TENSE_ORDER = ["present", "imparfait", "futur", "passeCompose"];

function imparfaitStem(v) {
  if (v.inf === "être") return "ét";
  return v.pres[3].replace(/ons$/, "");
}

function formatPronoun(pronoun, verbForm) {
  if (pronoun === "je") {
    const firstChar = verbForm.charAt(0).toLowerCase();
    const isVowel = /^[aeiouyhœæéèêà]/.test(firstChar);
    return isVowel ? "j'" : "je ";
  }
  let base = pronoun.charAt(0).toUpperCase() + pronoun.slice(1);
  return base + " ";
}

function getAnswers(verb, tense, idx) {
  if (tense === "present") return [verb.pres[idx]];
  if (tense === "imparfait") return [imparfaitStem(verb) + IMPARFAIT_END[idx]];
  if (tense === "futur") return [verb.fut + FUTUR_END[idx]];
  if (tense === "passeCompose") {
    const auxForm = AUX_PRES[verb.aux][idx];
    const pp = verb.pp;
    if (verb.aux === "etre") {
      const variants = Array.from(new Set([pp, pp + "e", pp + "s", pp + "es"]));
      return variants.map((p) => auxForm + " " + p);
    }
    return [auxForm + " " + pp];
  }
  return [];
}

function stripAccents(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function normalize(s, ignoreAccents) {
  let t = s.trim().toLowerCase().replace(/\s+/g, " ");
  if (ignoreAccents) t = stripAccents(t);
  return t;
}

// Fonction globale pour insérer un accent via les boutons
window.insertAccent = function(char) {
  const input = document.getElementById("answer-input");
  if (!input) return;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  input.value = input.value.substring(0, start) + char + input.value.substring(end);
  // Replace curseur juste après la lettre insérée
  input.selectionStart = input.selectionEnd = start + char.length;
  input.focus();
};

function pickQuestion(activeTenses) {
  // 50% de chance de revoir une erreur si la file n'est pas vide
  if (state.errorQueue.length > 0 && Math.random() < 0.5) {
    const errorItem = state.errorQueue[0];
    // On vérifie que le temps de l'erreur est toujours actif dans les filtres
    if (activeTenses[errorItem.tense]) {
      return { ...errorItem, isReview: true };
    } else {
      state.errorQueue.shift(); // On nettoie si le temps a été décoché
    }
  }

  const tenses = TENSE_ORDER.filter((t) => activeTenses[t]);
  const tenseList = tenses.length ? tenses : TENSE_ORDER;
  const verb = VERBS[Math.floor(Math.random() * VERBS.length)];
  const tense = tenseList[Math.floor(Math.random() * tenseList.length)];
  const idx = Math.floor(Math.random() * 6);
  return { verb, tense, idx, answers: getAnswers(verb, tense, idx), isReview: false };
}

let state = {
  started: false,
  ignoreAccents: false,
  activeTenses: { present: true, imparfait: true, futur: true, passeCompose: true },
  question: null,
  feedback: null,
  streak: 0,
  bestStreak: parseInt(localStorage.getItem("bestStreak") || "0", 10),
  errorQueue: [], // File d'attente des verbes ratés
};

const content = document.getElementById("content");

function toggleTense(t) {
  const next = { ...state.activeTenses, [t]: !state.activeTenses[t] };
  if (!Object.values(next).some(Boolean)) return;
  state.activeTenses = next;
  render();
}

function render() {
  if (!state.started) {
    content.innerHTML = `
      <div style="padding-top:10px;padding-bottom:10px;">
        <h1>Conjugaison 3e gr.</h1>
        <p class="subtitle">► ${VERBS.length} verbes + être/avoir</p>

        <div class="section-label">SELECT. TEMPS</div>
        <div class="chip-row" id="tense-chips">
          ${TENSE_ORDER.map(t => `<button class="chip ${state.activeTenses[t] ? "active" : ""}" data-tense="${t}">${TENSE_LABELS[t]}</button>`).join("")}
        </div>

        <label class="accent-toggle">
          <input type="checkbox" id="accent-checkbox" ${state.ignoreAccents ? "checked" : ""} />
          TOLERANCE ACCENTS (ON/OFF)
        </label>
        <div style="margin-top:28px;">
          <button class="btn" id="start-btn">► START ◄</button>
        </div>
      </div>
    `;
    document.querySelectorAll("#tense-chips .chip").forEach((btn) => {
      btn.addEventListener("click", () => toggleTense(btn.dataset.tense));
    });
    document.getElementById("accent-checkbox").addEventListener("change", (e) => {
      state.ignoreAccents = e.target.checked;
    });
    document.getElementById("start-btn").addEventListener("click", () => {
      initAudio(); 
      state.streak = 0;
      state.question = pickQuestion(state.activeTenses);
      state.feedback = null;
      state.started = true;
      render();
    });
    return;
  }

  const q = state.question;
  const disabled = state.feedback !== null ? "disabled" : "";
  const displayPronoun = formatPronoun(PRONOUNS[q.idx], q.answers[0]);
  const frenchContext = q.verb.ctx[q.tense][0];
  const russianContext = q.verb.ctx[q.tense][1];
  
  let feedbackHtml = "";
  if (state.feedback !== null) {
    const isCorrect = state.feedback === "correct";
    
    if (isCorrect) {
      feedbackHtml += `<div class="correct-mark">SUCCESS! ${displayPronoun}${q.answers[0]} ${frenchContext}</div>`;
    } else {
      feedbackHtml += `<div class="incorrect-mark">ERROR: ${displayPronoun}<u>${q.answers[0]}</u> ${frenchContext}</div>`;
    }
    
    feedbackHtml += `
      <div class="ru-line">
        <em>🇷🇺 ${RU_PRONOUNS[q.idx]} <strong>[${q.verb.ru}]</strong> ${russianContext}</em>
      </div>
    `;
  }

  // Clavier rapide pour accents si pas encore validé
  const accentBar = state.feedback === null ? `
    <div class="accent-bar">
      <button class="accent-btn" tabindex="-1" onclick="insertAccent('é')">é</button>
      <button class="accent-btn" tabindex="-1" onclick="insertAccent('è')">è</button>
      <button class="accent-btn" tabindex="-1" onclick="insertAccent('ê')">ê</button>
      <button class="accent-btn" tabindex="-1" onclick="insertAccent('à')">à</button>
      <button class="accent-btn" tabindex="-1" onclick="insertAccent('ç')">ç</button>
      <button class="accent-btn" tabindex="-1" onclick="insertAccent('î')">î</button>
      <button class="accent-btn" tabindex="-1" onclick="insertAccent('ô')">ô</button>
    </div>
  ` : "";

  content.innerHTML = `
    <div class="score-row">
      <div class="stats">
        <span>STREAK: ${state.streak}</span>
        <span style="font-size:16px; color:var(--text-muted)">BEST: ${state.bestStreak}</span>
      </div>
      <button class="menu-link" id="menu-btn">QUIT</button>
    </div>
    <div class="hr"></div>
    
    <div class="prompt-header">
      <span class="infinitive">${q.verb.inf}</span>
      <span class="tense-tag"> // ${TENSE_LABELS[q.tense]} ${q.isReview ? "⚠️" : ""}</span>
    </div>
    
    <div class="sentence-row">
      <span class="pronoun-label">${displayPronoun}</span>
      <div style="display:flex; flex-direction:column;">
        <input
          type="text"
          id="answer-input"
          placeholder="___"
          autocapitalize="none"
          autocorrect="off"
          spellcheck="false"
          ${disabled}
        />
        ${accentBar}
      </div>
      <span class="context-label">${frenchContext}</span>
    </div>
    
    <div class="feedback-zone">${feedbackHtml}</div>
    <button class="btn" id="action-btn">${state.feedback === null ? "VALIDATE" : "NEXT LEVEL >"}</button>
  `;

  const input = document.getElementById("answer-input");
  if (!disabled) {
    input.focus();
  }

  function validate() {
    if (state.feedback !== null) {
      state.question = pickQuestion(state.activeTenses);
      state.feedback = null;
      render();
      return;
    }
    
    if (!input.value.trim()) return;
    const norm = normalize(input.value, state.ignoreAccents);
    const ok = q.answers.some((a) => normalize(a, state.ignoreAccents) === norm);
    
    if (ok) {
      state.streak++;
      if (state.streak > state.bestStreak) {
        state.bestStreak = state.streak;
        localStorage.setItem("bestStreak", state.bestStreak);
      }
      if (q.isReview) {
        state.errorQueue.shift(); // Supprime l'erreur de la file d'attente
      }
    } else {
      state.streak = 0; // Combo brisé
      // Ajoute à la file d'attente (évite les doublons)
      const alreadyInQueue = state.errorQueue.some(item => item.verb.inf === q.verb.inf && item.tense === q.tense && item.idx === q.idx);
      if (!alreadyInQueue) {
        state.errorQueue.push({ verb: q.verb, tense: q.tense, idx: q.idx, answers: q.answers });
      }
    }

    state.feedback = ok ? "correct" : "incorrect";
    playSound(state.feedback);
    render();
    document.getElementById("answer-input").value = input.value;
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") validate();
  });
  document.getElementById("action-btn").addEventListener("click", validate);
  document.getElementById("menu-btn").addEventListener("click", () => {
    state.started = false;
    render();
  });
}

render();
</script>
</body>
</html>
