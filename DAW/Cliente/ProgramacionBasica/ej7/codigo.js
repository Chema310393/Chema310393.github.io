{
  let numero, factorial = 1;

  numero = prompt('Introduzca un número: ');
  for (let index = numero; index > 0; index--) {
    factorial *= index;
  }
  alert('El factorial de ' + numero + ' es ' + factorial);
}