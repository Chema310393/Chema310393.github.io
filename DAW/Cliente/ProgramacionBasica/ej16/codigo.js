{

  function muestra() {
    document.getElementById("texto").className = "visible";
    document.getElementById("enlace").className = "oculto";
  }
  function init() {
    document.getElementById("enlace").addEventListener("click", muestra);
  }
    document.addEventListener("DOMContentLoaded", init);
}