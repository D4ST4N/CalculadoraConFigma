const process =require ('process')
const resta=require('./restar')
const suma= require('./sumar')
const dividir= require('./dividir')
const multiplicar= require('./multiplicar')
const {argv} =process 
function calculadora(comando,a,b){
switch (comando.toLowerCase()) {
    case "multiplicar":
        return multiplicar(a,b)
    
    default:
        break;
}
}
console.log(calculadora(argv[2], +argv[3],+argv[4]));