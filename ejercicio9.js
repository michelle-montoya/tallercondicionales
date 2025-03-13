function esTrianguloValido(angulo1, angulo2, angulo3) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        return true;
    } else {
        return false; 
    }
    }
    let angulo1="26"
    let angulo2="14"
    let angulo3="110"
    if (esTrianguloValido(angulo1, angulo2, angulo3)) {
        alert("El triángulo es válido.");
    } else {
        alert("El triángulo no es válido.");
    }