/**
 * 
 * 1.- ¿Cuántos constructores tiene el objeto predefinido Date()? Explícalos mediante ejemplos.
 * 
 * @author José Mª Romero Ruiz
 */
{
    function init() {
        dFecha();
    }

    let dFecha = function () {
        //Constructores
        let fec = new Date();
        let fec2 = new Date((1232423423));
        let fec3 = new Date("12/01/2018");
        let fec4 = new Date(2018, 12-01, 5, 0, 10, 20, 30);

        document.getElementById("fechaActual").innerHTML=fec;
        document.getElementById("milisegundos").innerHTML=fec2;
        document.getElementById("cadena").innerHTML=fec3;
        document.getElementById("desglosado").innerHTML=fec4;
   

    };

    window.addEventListener("load", init);
}