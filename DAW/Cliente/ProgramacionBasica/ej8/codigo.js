{
    let numero = prompt('Introduzca un número: ');
    if (numero % 2 == 0) {
        document.getElementById("parrafo").innerHTML = "El número es par";
    } else {
        document.getElementById("parrafo").innerHTML = "El número es impar";
    }

}