function calcularCostoTotal(operador, minutosInternacionales) {
    let cargoFijo, valorMinutoInternacional, valorPaqueteDatos;
    switch (operador.toLowerCase()) {
        case 'tigo':
          cargoFijo = 45000;
          valorMinutoInternacional = 200;
          valorPaqueteDatos = 12000;
          break;
        case 'claro':
          cargoFijo = 30000;
          valorMinutoInternacional = 100;
          valorPaqueteDatos = 18000;
          break;
        case 'movistar':
          cargoFijo = 40000;
          valorMinutoInternacional = 250;
          valorPaqueteDatos = 8000;
          break;
        default:
          return "Operador no válido. Por favor, elija entre Tigo, Claro o Movistar.";
      }
      let costoMinutosInternacionales = minutosInternacionales * valorMinutoInternacional;
      let costoTotal = cargoFijo + costoMinutosInternacionales;
      return `El costo total es $${costoTotal} (Cargo fijo: $${cargoFijo}, Minutos internacionales: $${costoMinutosInternacionales})`;
}
function obtenerDatosYCalcular() {
    let operador = prompt("Ingrese su operador: Tigo, Claro o Movistar").toLowerCase();
    let minutosInternacionales = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
    if (isNaN(minutosInternacionales) || minutosInternacionales < 0) {
        alert("Por favor, ingrese una cantidad válida de minutos internacionales.");
        return;
      }
      let resultado = calcularCostoTotal(operador, minutosInternacionales);
  alert(resultado);
}