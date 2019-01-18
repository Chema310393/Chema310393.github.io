<?php
/**
 *@author José Mª Romero Ruiz
 *Define un array que permita almacenar y mostrar los verbos irregulares en inglés
 */

$verbos = array(
    'ser' => array('presente' => 'be', 'pasado' => 'was/were', 'Participio' => 'been'),
    'empezar' => array('presente' => 'begin', 'pasado' => 'began', 'Participio' => 'begun'),
    'doblar' => array('presente' => 'bend', 'pasado' => 'bent', 'Participio' => 'bent'),
    'morder' => array('presente' => 'bite', 'pasado' => 'bit', 'Participio' => 'bitten'),
    'soplar' => array('presente' => 'blow', 'pasado' => 'blew', 'Participio' => 'blown'),
);

echo "<table border=1px><tr>";
echo "<th>Verbo</th><th>Presente</th><th>Pasado</th><th>Participio</th></tr>";
foreach ($verbos as $key => $valor) {
    echo "<tr>";
    echo "<td>$key</td>";
    foreach ($valor as $verbo) {
        echo "<td>$verbo</td>";
    }

    echo "</tr>";
}

