function ejemploFetch(){
   
    fetch("http://data.fixer.io/api/latest?access_key=f38a57cd483ad78ab7eb162b65694e40")
    .then(larespuesta => larespuesta.json())
    .then(respuesta => mostarLista(respuesta,"main"));
    console.log("hola");
    
}



 
async function cargarVj(){
    let respuesta =await fetch("http://www.json-generator.com/api/json/get/bONgOdnCeW?indent=2");

    if(respuesta.ok){
        let objs= await respuesta.json();
        //console.log(objs);
        mostarLista(objs,"main");
    }

    console.log("mensaje await");
}

  /*crear una función que procese la lista videojuegos y muestre la información en una página html*/
  /*queda libre el diseño de la página*/

function mostarLista(lista,idContenedor){
    let contenedor= document.getElementById(idContenedor);//= "";
    for(let elemento of lista){
        /*comienzo a construir la estructura html con los datos de la lista*/
        /*se puede utilizar la comilla ` para evitar concatenar con + y utilizar ${dato}dentro sin tener que abrir y cerrar comillas ni concatenar*/
       contenedor.innerHTML += `<table style="width:100%">
       <tr>
         <td>DOLAR</td>
         <td>${elemento.USD}</td>
         <td>55577855</td>
       </tr>
     </table>`;
              
    }
/*otra posibilidad es declarar variable contenedor
let contenedor ="" y en cada paso del for ir formando el string en lugar de innerHTML y al final, fuera del for, realizar
document.getElementById(idContenedor).innerHTML = contenedor;*/
}

//document.addEventListener("DOMContentLoaded",ejemploFetch);
document.addEventListener("DOMContentLoaded",ejemploFetch());
console.log("unMensaje");