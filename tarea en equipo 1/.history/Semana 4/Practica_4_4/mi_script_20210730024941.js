document.addEventListener('DOMContentLoaded', function () {
    alert("Hay " + document.getElementsByTagName("a").length + " links.");

    alert("La dirección del penúltimo enlace es: " + document.getElementById("penultimo"));

    // Numero de enlaces que apuntan a http://prueba
    alert("La dirección del penúltimo enlace es: " + document.querySelector('a').href)
    // Numero de enlaces del tercer párrafo
});