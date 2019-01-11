{
    function init() {
        let boton = document.getElementById("cerrar");
        boton.addEventListener("click", function () {
            window.close();
        });
    }
    
window.addEventListener("load", init);
}


