document.addEventListener('DOMContentLoaded', function () {

    alert("Hay " + document.getElementsByTagName("a").length + " links.");

    alert("La dirección del penúltimo enlace es: " + document.getElementById("penultimo"));

    // Numero de enlaces que apuntan a http://prueba
    alert("Apuntan " + countInNodelist());
    // Numero de enlaces del tercer párrafo
    alert("Los enlaces del tercer párrafo son: " + document.getElementById("tercero").getElementsByTagName("a").length);
});

//no sé que hice profe pero funciona y son las 3 AM
function countInNodelist() {
    const myNodelist = document.querySelectorAll("a");
    let qty = 0;
    for (let i = 0; i < myNodelist.length; i++) {
        if (!myNodelist[i].href.localeCompare("http://prueba/")) {
            qty++;
        }  
    }

    return qty;
}