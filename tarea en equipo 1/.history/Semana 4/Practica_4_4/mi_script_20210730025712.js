document.addEventListener('DOMContentLoaded', function () {
    alert("Hay " + document.getElementsByTagName("a").length + " links.");

    alert("La dirección del penúltimo enlace es: " + document.getElementById("penultimo"));

    // Numero de enlaces que apuntan a http://prueba
    alert("Apuntan " + document.querySelectorAll('a').length);
    // Numero de enlaces del tercer párrafo
    alert("Los enlaces del tercer párrafo son: " + document.getElementsByTagName("a").length);
});