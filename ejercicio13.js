let cargofijo=0;
let valorminutos=0;
let paquetededatos=0;
let operador="tigo"
let minutosinternacionales;
if(operador==tigo){
    cargofijo=45000;
    valorminutos=200;
    paquetededatos=12000
}else if(operador==claro){
    cargofijo=30000;
    valorminutos=100;
    paquetededatos=18000;
}else{
    cargofijo=40000;
    valorminutos=250;
    paquetededatos=8000;
}
let costominutointernacional=(minutosinternacionales*valorminuto)
let costototal=(cargofijo+costominutointernacional+valorpaquetedatos)

console.log(`Operador: ${operador}`)
console.log(`Cargo fijo: $${cargoFijo}`)
console.log(`Costo llamadas internacionales: $${costominutosinternacionales}`)
console.log(`Valor paquete de datos: $${valorPaqueteDatos}`)
console.log(`Total a pagar: $${costototal}`)