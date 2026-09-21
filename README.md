<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu 2D - Progression des Niveaux</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #1a1a1a;
            color: #ffffff;
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow: hidden;
        }

        #gameCanvas {
            border: 2px solid #ffffff;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
            background-color: #000000;
            max-height: 95vh;
            width: auto;
        }
    </style>
</head>
<body>

    <canvas id="gameCanvas" width="700" height="1111"></canvas>
    <script src="game.js"></script>

</body>
</html>
