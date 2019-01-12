/**
 * 4.- Implementa el método esFecha() que devuelva si el argumento es una fecha o no.
 * 
 * @author José Mª Romero Ruiz
 */
{

    let parrafo;
    let fecha;

    function init(){

        fecha = document.getElementById("fecha");
        parrafo = document.getElementById("texto");
        let boton = document.getElementById("button");

        boton.addEventListener("click", escribir);
    }

    /**
     * Devuelve true o false
     * @param {*} str 
     */
    let esFecha = function (str) {
        return !isNaN(Date.parse(str));
    }

    let escribir = function () {
        parrafo.innerHTML = fecha.value + " - es una fecha = " + esFecha(fecha.value);
    }

    window.addEventListener("load", init);
}