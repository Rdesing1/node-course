// forma siscrona.
const fs = require('node:fs');
let informacion 

informacion = fs.readFileSync('../info.txt','utf-8');
console.log(informacion)
