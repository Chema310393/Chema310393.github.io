/**
 * 5.-Crea  una función que devuelva un array con cada uno de los argumentos.
 * 
 * @author José Mª Romero Ruiz
 */

 {
    function init(){
       let p=document.getElementById("info");
       p.innerHTML=crearArray("patata"," jamon"," huevos"," bacon");
    }

    let crearArray=function(){
        let array=[];
        for (let index = 0; index < arguments.length; index++) {
            array.push(arguments[index]);            
        }
        return array;
    }

    window.addEventListener("load", init);
 }