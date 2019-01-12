/**
 * 
 * 5.- Mediante ejemplos, indica valores y utilidad de index y lastIndex en una expresión regular. 
 * ¿Funciona en todos los navegadores?
 * 
 * @author José Mª Romero Ruiz
 */

{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let expresion = /azul/g;

        let string = "hola, me gusta el azul";

        expresion.test(string);
        //Indica el último índice según la expresión regular econtrada
        document.getElementById("lastIndex").innerHTML=expresion.lastIndex;
    };

    window.addEventListener("load", init);
}