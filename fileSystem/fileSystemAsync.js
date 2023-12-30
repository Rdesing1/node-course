const fs = require('node:fs')

console.log("EJECUTANDO MIENTRAS SE LEE EL PRIMER ARCHIVO")
fs.readFile('../info.txt','utf-8',(err,text)=>{
    if(err){
        console.error("ERR: Ha ocurrido un problema al leer el archivo.")
    }else{
        console.log(text)
    }
})


fs.readFile('../infoTwo.txt','utf-8',(err,text)=>{
    if(err){
        console.log("ERR: Ha ocurrido un problema al leer el archivo.")
    }else{
        console.log(text)
    }
})

console.log("EJECUTANDO MIENTRAS SE LEE EL SEGUNDO ARCHIVO")

