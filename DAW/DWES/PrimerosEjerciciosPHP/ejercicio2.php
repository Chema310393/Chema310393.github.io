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
$n1=2;
$n2=2000;
if ($n1==1||$n1==3||$n1==5||$n1==7||$n1==8||$n1==10||$n1==12) {
    echo('El mes tiene 31 días');
}else if($n1==2){
   if($n2%4==0){
       echo('El mes tiene 29 días');
   }else{
       echo('El mes tiene 28 días');
   }    
}else{
    echo('El mes tiene 30 días');
}


?>
</body>
</html>