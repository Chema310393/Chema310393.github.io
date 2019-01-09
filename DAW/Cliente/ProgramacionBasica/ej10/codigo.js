{
  {
    let cadena = prompt('Introduzca una cadena: ');
    if (cadena == invertirCadena(cadena)) {
      document.getElementById("parrafo").innerHTML = "Es un palíndromo ";
    }
    else {
      document.getElementById("parrafo").innerHTML = "No es un palíndromo "+invertirCadena(cadena);
    }
  }

  function invertirCadena(cadena) {
    let cadenaInvertida = "";
    for (var i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
  }
}

