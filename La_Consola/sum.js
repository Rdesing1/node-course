let resultadoSuma = 0

function Sumar(num,num2){
    if(typeof num === "number" && typeof num2 === "number"){
        resultadoSuma = (num + num2)
        return resultadoSuma
    } 
}

module.exports = {
    Sumar
}