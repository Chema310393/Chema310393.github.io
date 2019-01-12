/**
 * 2.- Indica la utilidad de Date.now();
 * @author José Mª Romero Ruiz
 */

{
    function init() {
        dFecha();
    }

    let dFecha = function () {
       document.getElementById("dateNow").innerHTML=Date.now();
    };

    window.addEventListener("load", init);
}