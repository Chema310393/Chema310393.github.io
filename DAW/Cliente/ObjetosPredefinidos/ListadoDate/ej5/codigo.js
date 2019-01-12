/**
 * Implementa el método fecha() que devuelva una fecha válida.
 * Lanzará una excepción en caso contrario.
 * 
 * @author José Mª Romero Ruiz
 */
{
    let parrafo;
   
   function init(){
   
       parrafo = document.getElementById("texto");
       let boton = document.getElementById("button");
   
       boton.addEventListener("click", fecha)
   }
   
    let fecha = function () {
       let fec = document.getElementById("fecha").value;
           try {
               if(isNaN(Date.parse(fec)))
                   throw new Error("Fecha invália");
               parrafo.style.color = "green";
               parrafo.innerHTML = fec;
           } catch (e) {
               parrafo.innerHTML = e.message;
           }    
       }
       window.addEventListener("load", init);
   
   }