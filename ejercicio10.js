function calcularPrecio(copias) {
    let precioPorCopia;
    let precioTotal;
    if (copias >= 0 && copias <= 499) {
        precioPorCopia = 120;
    } else if (copias >= 500 && copias <= 749) {
        precioPorCopia = 100; 
    } else if (copias >= 750 && copias <= 999) {
        precioPorCopia = 80;
    } else if (copias >= 1000) {
        precioPorCopia = 50;
    } else {
        return "Cantidad de copias no válida";
    }
    precioTotal = copias * precioPorCopia;
    return { precioPorCopia, precioTotal };
}
let copias = parseInt(prompt("Ingresa el número de copias que deseas imprimir:"));
let resultado = calcularPrecio(copias);
if(resultado==copias){
    alert(resultado); 
}else {
    alert(`El precio por copia es: $${resultado.precioPorCopia}\n` +
          `El precio total es: $${resultado.precioTotal}`);
}
