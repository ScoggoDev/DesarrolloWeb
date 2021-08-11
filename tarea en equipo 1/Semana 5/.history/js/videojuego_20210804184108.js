function ejemploFetch(){
   
    fetch("http://data.fixer.io/api/latest?access_key=f38a57cd483ad78ab7eb162b65694e40")
    .then(larespuesta => larespuesta.json())
    //.then(respuesta => mostarLista(respuesta,"main"));
    console.log("hola");
    
}

 
async function cargarVj(){
    let respuesta =await fetch("http://data.fixer.io/api/latest?access_key=f38a57cd483ad78ab7eb162b65694e40");

    if(respuesta.ok){
        let objs= respuesta.rates;
        let usd= objs.USD;
        //console.log(objs);
        mostarLista(objs,"main");

        let contenedor= document.getElementById(idContenedor);//= "";


        /*comienzo a construir la estructura html con los datos de la lista*/
        /*se puede utilizar la comilla ` para evitar concatenar con + y utilizar ${dato}dentro sin tener que abrir y cerrar comillas ni concatenar*/
       contenedor.innerHTML += `<div><h1>${usd}</h1>
       <p>${usd}</p>`;
       /*src para imagenes, no puede utilizarse ${elemento.imagen} porque agrega una barra / al inicio*/
       contenedor.innerHTML +="<img src="+usd+"><br>";
       contenedor.innerHTML +=`<a href=${usd}>Ver trailer</a>
       <hr></div>`;
    }

    console.log(usd);
}

  /*crear una función que procese la lista videojuegos y muestre la información en una página html*/
  /*queda libre el diseño de la página*/



//document.addEventListener("DOMContentLoaded",ejemploFetch);
document.addEventListener("DOMContentLoaded",ejemploFetch());
console.log("unMensaje");