function calcularCosto(dias) {
    let costo;
    if (dias === 15) {
        costo = 18000;
    } else if (dias === 30) {
        costo = 35000; 
    } else if (dias === 90) {
        costo = 86000; 
    } else {
        costo = 0;
    }

    return costo;
}
let dias = parseInt(prompt("Ingresa el número de días (15, 30 o 90):"));
let costoMensualidad = calcularCosto(dias);
if (costoMensualidad > 0) {
    alert("El costo de la mensualidad es: $" + costoMensualidad);
} else {
    alert("Opción de días inválida. Ingresa 15, 30 o 90 días.");
}