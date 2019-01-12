/**
 * 10.- Busca en el objeto String funciones que simulen la funcionalidad de exec()
 * 
 * @author José Mª Romero Ruiz
 */
{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let expresion = /a/;

        let string = "hola, me gusta el azul";
        //El método match() se usa para obtener todas las ocurrencias de una expresión
        // regular dentro de una cadena.

        document.getElementById("exec").innerHTML=string.match(expresion);
    };

    window.addEventListener("load", init);
}