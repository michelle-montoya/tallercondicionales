let fisica="10";
let quimica="5";
let biologia="1";
let matematicas="3";
let informatica="8";
let sumacalificaciones=fisica+quimica+biologia+matematicas+informaticas;
let porcentaje=(sumadetodaslascalificaciones/50)*100;
let calificacion;

if(porcentaje>=80){
    calificacion=excelente;
}else if(porcentaje>=60){
    calificacion=buena;
}else{porcentaje<=59.9
    calificacion=mala;
}
console.log(`tu porcentaje es ${porcentaje}% y tu calificacion es ${califiocacion}`)