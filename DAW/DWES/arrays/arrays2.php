<?php
/**
 *@author José Mª Romero Ruiz
 *Tablero para jugar al juego de los barcos.
 */
$tablero=[
    [0,1,2,3,4,5,6,7,8],
    [0,1,2,3,4,5,6,7,8],
    [0,1,2,3,4,5,6,7,8],
    [0,1,2,3,4,5,6,7,8],
    [0,1,2,3,4,5,6,7,8],
    [0,1,2,3,4,5,6,7,8],
    [0,1,2,3,4,5,6,7,8],
    [0,1,2,3,4,5,6,7,8],
    [0,1,2,3,4,5,6,7,8]
];
foreach($tablero as $keyFila => $fila){
    echo "<p>";
   foreach($fila as $keyColumna => $columna){
       echo ' ['.$keyFila.' '.$columna.']';
    }
    echo '</p>';
}

?>