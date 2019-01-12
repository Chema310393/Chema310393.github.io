/**
 * 6.-Mediante ejemplos, indica valores y utilidad de lastMatch en una expresión regular.
 *  ¿Funciona en todos los navegadores?
 * 
 * @author José Mª Romero Ruiz
 */
{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let string = "Neque porro quisquam es que dolorem ipsum quia dolor sit amet, consectetur, adipisci velit quisquam";
        let expresion = new RegExp("is","g");
        for(i = 0; i < 3; i++) {
           expresion.test(string);
           document.getElementById("lastMatch").innerHTML=RegExp.lastMatch + " en el índice: " + expresion.lastIndex;
           console.log(RegExp.lastMatch + " en el índice: " + expresion.lastIndex);
        }
    };

    window.addEventListener("load", init);
}