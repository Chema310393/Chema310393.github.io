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
$suma = 0;
for ($i=1; $i < 7; $i++) { 
    if($i%2==0){
        $suma+=$i;
    }
}
echo('La suma de los 3 primeros números pares es '.$suma);

?>
</body>
</html>