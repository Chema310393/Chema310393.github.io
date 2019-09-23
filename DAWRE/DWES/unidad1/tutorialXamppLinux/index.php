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

<h2>Tutorial Xampp Linux</h2>
<div id="contenedor">

    <?php
    $array = array("Buscamos en Google: Xampp",
        "Pinchamos en descargar para Linux",
        "Nos situamos en el directorio del instalador, cambiamos los permisos para que nos permita instalarlo",
        "Ejecutamos el instalador",
        "Elegimos los componentes a instalar",
        "Y presionamos 'Siguiente' hasta que comience la instalación",
        "Esperamos hasta que termina la instalación",
        "Xampp tiene una interfáz gráfica, pero nosotros lo arrancaremos por comandos, así que desmarcamos el check y finalizamos",
        "Arrancamos el Xampp y listo",
        "Para desinstalarlo, basta con parar el servidor (/opt/lampp/lampp stop) y ejecutar el uninstall");

    for ($i = 1; $i <= 9; $i++) {
        echo '<div class="paso">';
        echo '<h1>' . $i . '</h1>';
        echo '<img src="source/' . $i . '.jpg">';
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