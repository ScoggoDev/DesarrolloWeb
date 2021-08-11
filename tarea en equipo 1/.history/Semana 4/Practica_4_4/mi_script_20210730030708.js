document.addEventListener('DOMContentLoaded', function () {

    alert("Hay " + document.getElementsByTagName("a").length + " links.");

    alert("La dirección del penúltimo enlace es: " + document.getElementById("penultimo"));

    // Numero de enlaces que apuntan a http://prueba
    alert("Apuntan " + document.querySelectorAll('a').length);
    // Numero de enlaces del tercer párrafo
    alert("Los enlaces del tercer párrafo son: " + document.getElementById("tercero").getElementsByTagName("a").length);
});

function compareNodelist() {
    let a = document.querySelectorAll('a');
    let qty = 0;
    for (let i = 0; i < a.length; i++) {
        if ()    
    }
}