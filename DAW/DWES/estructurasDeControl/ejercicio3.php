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
for ($i=0; $i < 11; $i++) { 
    for ($j=0; $j <11 ; $j++) { 
        echo($i.'x'.$j.'='.($i*$j).' ');
    } 
    echo('<br>');   
}

?>
</body>
</html>