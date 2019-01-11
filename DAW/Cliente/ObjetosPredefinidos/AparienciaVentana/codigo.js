/**
 * 
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * window.open()
 * document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * 
 * @author José Mª Romero Ruiz
 */

 let nuevaVentana=`
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>Se han utilizado las propiedades:</p>
    <ul>
        <li>height=200</li>
        <li>width=300</li>    
    </ul>
</body>
</html>
 `;

 function init(){
     let boton= document.getElementById("nuevaVentana");
     boton.addEventListener("click", abrirVentana)
 }

 let abrirVentana=function(){
    let ventana=window.open("","ventanaNueva","top=0,left=0,height=200,width=300");
    ventana.document.write(nuevaVentana);
    ventana.document.close();
 }

 window.addEventListener("load", init);