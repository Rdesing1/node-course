let resultado = 0;
let respuesta = "";

export const sum = (num,num2) =>{
    if(typeof num === "number" && typeof num2 === "number"){
        resultado = (num + num2);
        return resultado;
    }else{
        respuesta = "Err: solo se pueden sumar numeros.";
        return respuesta;
    }
}

