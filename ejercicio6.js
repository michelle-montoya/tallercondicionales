function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
let numero1="26";
let numero2="12";
let numero3="7";
let mayor = encontrarMayor(numero1, numero2, numero3);
alert("El número mayor es: " + mayor);