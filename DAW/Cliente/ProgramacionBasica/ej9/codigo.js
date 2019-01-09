{
  let cadena = prompt('Introduzca una cadena: ');
  if (cadena.toUpperCase() == cadena)
    document.getElementById("parrafo").innerHTML = "Está en mayúsculas.";
  else if (cadena.toLowerCase() == cadena)
    document.getElementById("parrafo").innerHTML = "Está en minúsculas.";
  else
    document.getElementById("parrafo").innerHTML = "Está en mayúsculas y minúsculas."
}