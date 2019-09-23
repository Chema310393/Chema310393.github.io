<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Index</title>
</head>

<body>

<h2>Tutorial Xampp Windows</h2>
<div id="contenedor">
    <?php
    $array = array("Buscamos en Google: Xampp", "Pinchamos en descargar para Windows", "Ejecutamos el instalador", "Elegimos los componentes a instalar", "Elegimos el directorio donde instalar", "Ejecutamos Xampp", "Para cambiar el directorio del proyecto, modificar DocumentRoot de httpd.conf");
    for ($i = 1; $i <= 7; $i++) {
        echo '<div class="paso">';
        echo '<h1>' . $i . '</h1>';
        echo '<img src="source/' . $i . '.PNG">';
        echo '<p>' . $array[$i - 1] . '</p>';
        echo '</div>';
    }
    ?>

</div>
<section id="botones">
    <a href="../index.html">
        <button id="atras">Atras</button>
    </a>
    <a href="../../../../index.html">
        <button id="inicio">Inicio</button>
    </a>
</section>
</body>
</html>