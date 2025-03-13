function diagnosticarComputadora(pitido, discoDuro) {
    if (pitido && discoDuro) {
        return "La computadora está averiada.";
    } else if (pitido && !discoDuro) {
        return "Verificar contactos de la unidad.";
    } else if (!pitido && !discoDuro) {
        return "Traiga la computadora para repararla en la central.";
    } else if (!pitido && discoDuro) {
        return "Compruebe las conexiones de altavoces.";
    }
}
function obtenerDatosYDiagnosticar() {
    let pitido = prompt("¿La computadora emite un pitido al iniciarse? (si/no)").toLowerCase();
    let discoDuro = prompt("¿El disco duro gira? (si/no)").toLowerCase();
    pitido = pitido === "si";
    discoDuro = discoDuro === "si";
    let resultado = diagnosticarComputadora(pitido, discoDuro);
    alert(resultado);
}
obtenerDatosYDiagnosticar();
