/**
 *7- Crea una función que elimine todos los undefined de un array.
 *
 * 
 * @author José Mª Romero Ruiz
 */

{
    function init(){
       let p=document.getElementById("info");
       array=["patata"," jamon",undefined," bacon", [1,undefined,3,4], ["Antonio", undefined]];
       quitarUndefined(array);
       p.innerHTML=array;
    }

    let quitarUndefined=function(){

        for (let index = 0; index < arguments.length-1; index++) {
            if(typeof arguments[index] == undefined){
                array.splice(array[index], 1);
                index--;
            }      
        }
    }

    window.addEventListener("load", init);
 }