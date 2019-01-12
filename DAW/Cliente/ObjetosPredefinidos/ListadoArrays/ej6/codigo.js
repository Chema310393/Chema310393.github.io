/**
 * 6.-Crea  una función que devuelva un array con cada uno de los argumentos. 
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * 
 * @author José Mª Romero Ruiz
 */

{
    function init(){
       let p=document.getElementById("info");
       p.innerHTML=crearArray("patata"," jamon"," huevos"," bacon", [1,2,3,4], ["Antonio", "Luis"]);
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