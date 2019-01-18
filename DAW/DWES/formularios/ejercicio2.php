<?php

/**
 * Formulario para crear un currículum que incluya: Campos de texto, grupo de botones de opción, casilla de verificación, lista de selección única, lista de selección múltiple, botón de validación, botón de imagen, botón de reset, etc.
 * @license http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @author José María Romero Ruiz
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <form method="post" action="index.php?page=<?php echo dirname(__FILE__).'/'.basename(__FILE__) ?>">
    <p>Nombre: <input type="text" name="nombre" required>
    <p>Apellidos: <input type="text" name="apellidos" required>
    <p>Sexo: 
    Hombre<input type="radio" name="sexo" value="Hombre" checked>
    Mujer<input type="radio" name="sexo" value="Mujer">
    <p>Casado<input type="checkbox" name="casado">

    <p>Ocupación: <select name="menuOcupacion">
        <option selected>Estudiante</option>
        <option>Trabajo a tiempo parcial</option>
        <option>Trabajo a tiempo completo</option>
    </select>

    <p>Hobbies
    <p><select name="menuHobbies[]" size="4" multiple="multiple">
        <option>Leer</option>
        <option>Videojuegos</option>
        <option>Deporte</option>
        <option>Parchis con casco</option>
    </select>

    <p><input type="submit" name="limpiar" value="Limpiar"/>
    <input type="submit" name="enviar" value="Enviar"/>

    </form>
    <?php 
        if (isset($_POST['enviar'])) {
            echo '<p>Nombre:'.$_POST['nombre'];  
            echo '<p>Apellidos: '.$_POST['apellidos'];         
            echo '<p>Sexo: '.$_POST['sexo']; 
            echo '<p>Ocupación: '.$_POST['menuOcupacion'];
            echo '<p>Casado: ';
            if(isset($_POST['casado'])){
                echo 'Si';
            }else{
                echo 'No';
            }
            echo '<p>Hobbies: ';      
            foreach ($_POST['menuHobbies'] as $hobbies ) {
                echo $hobbies.' ';
            }
        }
    ?>

</body>
</html>