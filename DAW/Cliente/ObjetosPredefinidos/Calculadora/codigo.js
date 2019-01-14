/**
 * Partiendo de un documento html vacío, crea los elementos HTML 
 * de una calculadora mediante los métodos del objeto predefinido document.
 * 
 * @author José Mª Romero Ruiz
 */
{
    let botones = [
        "CE",
        "DEL",
        "%",
        "+",
        "7",
        "8",
        "9",
        "-",
        "4",
        "5",
        "6",
        "x",
        "1",
        "2",
        "3",
        "/",
        "0",
        "+/-",
        ",",
        "="
    ];

    function init() {
        calculadora.pintarCalculadora();
    }

    let calculadora = {

        idBotones:["btnCe", "btnDel", "btnPorcentaje", "btnMas", "btn7", "btn8", "btn9", "btnMenos", "btn4", "btn5", "btn6",
         "btnMultiplicar", "btn1", "btn2", "btn3", "btnDividir", "btn0", "btnMasMenos", "btnComa", "btnIgual"],

        pintarCalculadora: () => {
            let cuerpo=document.createElement("div");
            cuerpo.className="calculadora";

            let pantalla=document.createElement("input");
            pantalla.disabled="disabled";
            pantalla.className="pantalla";

            let cuadroBotones=document.createElement("div");
            cuadroBotones.className="cuadroBotones";

            cuerpo.appendChild(pantalla);
            cuerpo.appendChild(cuadroBotones);

            for (let i = 0; i < botones.length; i++) {
                let boton=document.createElement("input");
                boton.type="button";
                boton.className="boton";
                boton.id=calculadora.idBotones[i];
                boton.value=botones[i];
                cuadroBotones.appendChild(boton);
            }
            
            document.body.appendChild(cuerpo);
        },
    }

    window.addEventListener("load", init);
}