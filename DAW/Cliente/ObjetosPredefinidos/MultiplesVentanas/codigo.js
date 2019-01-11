/**
 * 
 * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * 
 * @author José Mª Romero Ruiz
 */

let nuevaVentana = function (i) {
    return `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">    
    <title>Ventana ${i}</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <script src="cerrar.js" type ="text/javascript"></script>
</head>
<body>
    <p>Ventana ${i} <input type='button' id='cerrar' value='Cerrar'></p> 
    <noscript><h1>Se requiere javascript</h1></noscript>
</body>
</html>
 `;
}
function init() {
    let boton = document.getElementById("abrirVentanas");
    boton.addEventListener("click", abrirVentanas)
}

function abrirVentanas() {
    for (let i = 0; i < 5; i++) {
        let ventana = window.open('', '', 'top='+i*10+', left='+i*10+',width=200,height=200');
        ventana.document.write(nuevaVentana(i+1));
        ventana.document.close();
    }

}

window.addEventListener("load", init);