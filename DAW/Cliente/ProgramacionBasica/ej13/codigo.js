{

  function anade() {
    var elemento = document.createElement("li");
    var texto = document.createTextNode("Nuevo elemento");
    elemento.appendChild(texto);
   
    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
   
  }

  function init(){
    document.getElementById("boton").addEventListener("click", anade);
  }

  window.addEventListener("load", init);
}

