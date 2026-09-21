<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Novel</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Menu Principal -->
  <div id="main-menu">
    <h1>Titre de l'Aventure</h1>
    <button id="start-btn">Commencer</button>
  </div>

  <!-- Zone de jeu 16:9 -->
  <div id="game-stage">
    <div id="bg-gif"></div>

    <!-- Bulle Homme (R.) - Haut Gauche -->
    <div id="man-bubble" class="speech-bubble man-theme">
      <div id="speaker-name">R.</div>
      <div id="dialog-text"></div>
    </div>

    <!-- Réponses / Action Suivant Femme (E.) - Bas Droite -->
    <div id="choices-container"></div>
  </div>

  <!-- Musique -->
  <audio id="bgm" loop src="assets/love.mp3"></audio>

  <script src="script.js"></script>
</body>
</html>
