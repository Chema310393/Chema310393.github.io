{
  /*
  function ocultar() {
    let enlace = this.id;
    let parrafo = 'p' + this.id.slice(6);
    

    if (document.getElementById(enlace).innerHTML == "Mostrar contenidos") {
      document.getElementById(parrafo).className = "visible";
      document.getElementById(enlace).innerHTML = "Ocultar contenidos";
    } else {
      document.getElementById(parrafo).className = "oculto";
      document.getElementById(enlace).innerHTML = "Mostrar contenidos";

    }

  }
  */

  function ocultar() {
    const p = this.previousElementSibling;
    if (!p) return;
    p.classList.toggle('oculto');
    if (p.classList.contains("oculto")) {
      this.innerHTML = "Mostrar contenidos";
      return;
    }
    this.innerHTML = "Ocultar contenidos";
  }


  function init() {
    const div = document.getElementById('informacion');
    //debugger;
    let enlaces = div.getElementsByTagName("a");
    for (let index = 0; index < enlaces.length; index++) {
      enlaces[index].addEventListener("click", ocultar);
    }
  }
  window.addEventListener("load", init);

}