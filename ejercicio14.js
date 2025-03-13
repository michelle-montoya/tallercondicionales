function calcularPrecioSandwich(tamaño, ingredientes) {
    let precioBase = 0;

    if (tamaño === 'pequeño') {
      precioBase = 6000;
    } else if (tamaño === 'grande') {
      precioBase = 12000;
    } else {
      return "Tamaño no válido. Elija entre 'pequeño' o 'grande'.";
    }

    const preciosIngredientes = {
      tocineta: 3000,
      jalapeño: 0,
      pavo: 3000,
      queso: 2500
    };

    let precioTotal = precioBase;
    for (let ingrediente of ingredientes) {
      if (preciosIngredientes[ingrediente]) {
        precioTotal += preciosIngredientes[ingrediente];
      }
    }
  

    return `El precio total de su sándwich es $${precioTotal}.`;
  }

  function realizarPedido() {
    let tamaño = prompt("¿Qué tamaño de sándwich desea? (pequeño o grande)").toLowerCase();
    let ingredientesInput = prompt("¿Qué ingredientes adicionales desea? (tocineta, jalapeño, pavo, queso). Separados por coma").toLowerCase();
    let ingredientes = ingredientesInput.split(",").map(ingrediente => ingrediente.trim());
    let resultado = calcularPrecioSandwich(tamaño, ingredientes);
    alert(resultado);
  }
  
  realizarPedido();