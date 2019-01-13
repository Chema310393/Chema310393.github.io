/**
 * Expresiones regulares: comprobando DNI
 * Realiza la comprobación del dni.
 * Para ello, crea un formulario con tres campos: nombre, dni y fecha de nacimiento.
 * Al perder el foco de la caja de texto del DNI se realizará la comprobación. Aparecerá un mensaje (Derecha o abajo) en rojo, indicando:
 *  -formato incorrecto
 *  -letra incorrecta
 *  -introduce dni (si está vacío)
 * Utiliza los grupos para capturar el número y la letra. La letra puede estar en mayúscula o minúscula, separado o no por espacio/guión
 * 
 * @author José Mª Romero Ruiz
 */

{

    const arrayLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    const expresion = /(\d{8})[\s-]?([A-Z])$/i;

    function init() {
        spanDNI = document.getElementById("errorDNI");
        dni = document.getElementById("dni");
        dni.addEventListener("focus", ()=>{spanDNI.textContent=""});
        dni.addEventListener("blur", comprobarDNI);
        
    }

    let comprobarDNI = function () {

        if(dni.value==""){
            spanDNI.textContent = "DNI VACÍO";
            return;
        }

        if (!expresion.test(dni.value)) {
            spanDNI.textContent = "FORMATO INCORRECTO";
            return;
        }
        let [,numero,letra]=expresion.exec(dni.value);
        let letraCorrecta= arrayLetras[(parseInt(numero))%23];
        if(letraCorrecta!=letra.toUpperCase()){
            spanDNI.textContent = "LETRA INCORRECTA";
            return;
        }


    }

    window.addEventListener("load", init);
}