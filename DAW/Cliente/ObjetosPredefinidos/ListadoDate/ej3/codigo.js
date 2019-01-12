/**
 * 3.- Indica el formato del parámetro cadena del método Date.parse().
 * @author José Mª Romero Ruiz
 */
{
    function init() {
        dFecha();
    }

    let dFecha = function () {
        document.getElementById("fecha").innerHTML = Date.parse("May, 24, 2015");

    };

    window.addEventListener("load", init);
}