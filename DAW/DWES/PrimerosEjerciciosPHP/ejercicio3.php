<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio2</title>
</head>
<body>
<?php
$cumpleanos = new DateTime("1993-03-31");
$hoy = new DateTime();
$annos = $hoy->diff($cumpleanos);
echo $annos->y;


?>
</body>
</html>