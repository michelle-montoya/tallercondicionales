function calcularAyuda(genero, edad) {
    let ayuda;
    if (genero === "femenino") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30 && edad <= 50) {
            ayuda = 100000;
        } else {
            ayuda = 0;
        }
    } else if (genero === "masculino") {
        ayuda = 40000;
    } else {
        ayuda = 0;
    }

    return ayuda;
}
let genero = prompt("Ingresa tu género (femenino/masculino):").toLowerCase();
let edad = parseInt(prompt("Ingresa tu edad:"));
let ayudaMensual = calcularAyuda(genero, edad);
alert("El valor de ayuda mensual es: $" + ayudaMensual);