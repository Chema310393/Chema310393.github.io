/**
 * 3.-En una expresión regular, indica la utilidad de los campos .flag .options ¿Funciona en todos los navegadores?
 * @author José Mª Romero Ruiz
 */
{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let expresion = /ab+c/ig;

        document.getElementById("flags").innerHTML=expresion.flags;
        //Obsoleto
        document.getElementById("options").innerHTML=expresion.options;
    };

    window.addEventListener("load", init);
}