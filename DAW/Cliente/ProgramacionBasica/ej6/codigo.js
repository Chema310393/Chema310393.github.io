{
  let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  let numero = prompt("DNI sin letra: ");
  let letra = prompt("Letra DNI");
  letra = letra.toUpperCase();
  if (parseInt(numero) < 10000000 || parseInt(numero) > 99999999) {
    alert("El número proporcionado no es válido");
  } else {
    let letraCorrecta = letras[numero % 23];
    if (letraCorrecta != letra) {
      alert("ERROR");
    } else {
      alert("DNI Correcto");
    }
  }
}