function calcularRendimiento(fisica, quimica, biologia, matematicas, informatica){
    if (fisica < 0 || fisica > 10 || 
        quimica < 0 || quimica > 10 || 
        biologia < 0 || biologia > 10 || 
        matematicas < 0 || matematicas > 10 || 
        informatica < 0 || informatica > 10) {
        return "Error: Las calificaciones deben estar entre 0 y 10";
    }
    let suma = fisica + quimica + biologia + matematicas + informatica;
    let porcentaje = (suma / 50) * 100;
    let calificacion;
    if (porcentaje >= 0 && porcentaje <= 59.9) {
        calificacion = "Mala";
    } else if (porcentaje >= 60 && porcentaje <= 80) {
        calificacion = "Buena";
    } else if (porcentaje > 80) {
        calificacion = "Excelente";
    }
    let mensaje = `Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}`;
    
    return mensaje;
}
console.log(calcularRendimiento(7, 8, 6, 9, 7));
console.log(calcularRendimiento(4, 5, 3, 6, 4));
console.log(calcularRendimiento(9, 10, 8, 9, 9));