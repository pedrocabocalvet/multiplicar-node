// libreria nativa de node, solo con poner el require ya la podemos usar es para grabar en ficheros
const fs = require('fs');
// libreria npm para dar color a los textos que salen en consola
const colors = require('colors');

function crearArchivo(base, limite){

    return new Promise((resolve, reject)=>{
      if(!Number(base) || !Number(limite)) {
        reject(`El valor introducido ${base} no es un número;`);
        return;
      }

      const data = multiplicar(base, limite);

      fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) reject(err);
        else resolve(`El archivo tabla-${base}.txt ha sido creado!`);
      });

    });

}

function listarTabla(base, limite) {
  if(!Number(base) || !Number(limite) ) {
    reject(`El valor introducido ${base} no es un número;`);
    return;
  }
  console.log(multiplicar(base,limite).green);
}

function multiplicar(base, limite=10){
  let data = `******* TABLA DEL ${base} *******\n\n`;

  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }
  return data;
}

module.exports = {
  crearArchivo,
  listarTabla
}
