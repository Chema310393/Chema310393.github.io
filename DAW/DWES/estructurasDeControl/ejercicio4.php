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
for ($i=0; $i < 256; $i+=10) { 
    for ($j=0; $j <256 ; $j+=10) { 
        for ($k=0; $k <256 ; $k+=10) { 
            echo "<div href='' title='$i,$j,$k' style='display:inline-block; height:20px; width:20px; background-color:rgb($i,$j,$k);'></div>";
            if($i == 200 & $j == 200 & $k == 200)
                    echo "<br/>";
        }
    } 
 
}

?>
</body>
</html>