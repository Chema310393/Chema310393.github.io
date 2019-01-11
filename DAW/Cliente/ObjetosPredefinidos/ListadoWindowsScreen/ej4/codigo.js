/**
 * 4.Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 * 
 * 
 * @author José Mª Romero Ruiz
 */

{

    let location = ["Host: " + window.location.host,
        "Host name: " + window.location.hostname,
        "Protocol: " + window.location.protocol,
        "Path: " + window.location.pathname,
        "Href: " + window.location.href,
        "Origin: " + window.location.origin,
        "Port: " + window.location.port
    ];

    function init() {
        crearLista();
    }

    function crearLista() {
       
        let inicio = document.createElement("ol");

        let elemento;
        let texto;

        //Recorro el array de localizaciones 
        location.forEach(function(value){

            elemento = document.createElement("li");
            texto = document.createTextNode(value);
        
            elemento.appendChild(texto);
            inicio.appendChild(elemento);
        
        });
        document.body.appendChild(inicio);

    }
    window.addEventListener("load", init);
}