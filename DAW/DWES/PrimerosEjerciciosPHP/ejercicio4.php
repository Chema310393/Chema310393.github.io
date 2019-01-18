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
$mes = date("n");
$dia=date("j");
if($mes==12 && $dia>=22|| $mes==1 || $mes==2|| $mes==3 && $dia<22){
    echo('Invierno');
}else if($mes==3 && $dia>=22|| $mes==4|| $mes==5|| $mes==6 && $dia<22){
    echo('Primavera');
}else if($mes==6 && $dia>=22|| $mes==7|| $mes==8|| $mes==9 && $dia<22){
    echo('Verano');
}else{
    echo('Otoño');
}


?>
</body>
</html>