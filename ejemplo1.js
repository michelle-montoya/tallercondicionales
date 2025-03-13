function calcularsalario(nombre, horas){
    let tarifaporhora;
    let salariototal;
    if (horas >= 1 && horas <= 10) {
        tarifaPorHora = 30000;
        salarioTotal = horas * tarifaPorHora;
    } else if (horas > 10) {
        tarifaPorHora = 33000;
        salarioTotal = horas * tarifaPorHora;
    } else {
        return "Error: El número de horas debe ser mayor a 0";
}
}
console.log(calcularSalario("Ana López", 8));
console.log(calcularSalario("Juan Pérez", 15));