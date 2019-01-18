{
    function init(){
        let ruta=location.pathname;
        let rutaRecortada=ruta.substr(0, ruta.lastIndexOf('/'));
        document.getElementById("path").innerHTML=rutaRecortada;
    }
    window.addEventListener("load", init);
}