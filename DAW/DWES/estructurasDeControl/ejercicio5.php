<?php

    /**
    * Dado un mes y un año, mostrar el calendario del mes. Marcar el día actual en verde y los festivos en rojo.
    * @license http://opensource.org/licenses/gpl-license.php  GNU Public License
    * @author José María Romero Ruiz
    */

    $fechaSistema = getdate();
    $diasMes = cal_days_in_month(CAL_GREGORIAN,$fechaSistema['mon'],$fechaSistema['year']);
    $primerDiaMes = strtotime($fechaSistema['year']."-".$fechaSistema['mon']."-01");
    $dia=date('N',$primerDiaMes);
    echo $fechaSistema['month'];
    echo "<table border=2px;><tr>";
    echo "<td>Lunes</td>";	
    echo "<td>Martes</td>";
    echo "<td>Miércoles</td>";	
    echo "<td>Jueves</td>";
    echo "<td>Viernes</td>";	
    echo "<td>Sábado</td>";
    echo "<td>Domingo</td></tr>";
    echo "<tr>";
    $columnas = 0;
    for($j=1;$j<$dia;$j++){
       	echo "<td style=background-color:grey;></td>";
        $columnas++;
    }
    for($i=1;$i<35;$i++){
        $columnas++;
        if($columnas % 7 == 0)
            echo "<td style=background-color:red;>$i</td>";
        else if($i == $fechaSistema['mday'])
	    echo "<td style=background-color:green;>$i</td>";
        else
       	    echo "<td>$i</td>";
	if($columnas % 7 == 0)
	    echo "</tr>";
        if($i>=$diasMes)
            break;
	
    }

    echo "</tr>";
    echo "</table>";

?>