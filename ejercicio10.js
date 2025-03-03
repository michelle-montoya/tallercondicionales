let precioporcopia;
let copias="500"
if(copias<=499){
    precioporcopia=120
    let(precioporcopia*copias)
}if(copias<=749){
    precioporcopia=100
    let(precioporcopia*copias)
}if(copias<=999){
    precioporcopia=80
    let(precioporcopia*copias)
}else{
    precioporcopia=50
    let(precioporcopia*copias)
}
console.log(`precio por copia es de:${precioporcopia} y el valor total por la cantidad de copias es: ${copias}`)