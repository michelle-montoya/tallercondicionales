let escogertipo = 1
let cantidadlavadoras = 3
let horas =  5

function calcularvalortipo(tipo){
    if(tipo == 1){
        return 3000
    }else{
        return 4000
    }
}
function caculardescuento(cantidad){
    if(cantidad>3){
        return 0.03
    }else{
        return 0
    }
}
function calcularhorascosto(tipo,cantidad){
    calcularvalortipo(tipo)*horas*cantidadlavadoras - (calcularvalortipo(tipo)*horas*cantidadlavadoras) * caculardescuento(cantidad)
}

calcularhorascosto(1,4)