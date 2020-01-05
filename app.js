// con la destructuración cogemos solo la funcion que queremos, el require lo que hace es traerse
// del objeto global module donde en el otro fichero a sido guardada la funcion
const {crearArchivo,listarTabla} = require("./multiplicar/multiplicar");

// dependecia de npm yargs para recibir parametros por consola, desordenados, pone alias, defaults, requeridos, help
const {argv} = require("./config/yargs")

// libreria npm para dar color a los textos que salen en consola
const colors = require('colors');

// mola por que se puede ver el objeto module con las importaciones hechas, esto no es del ejercicio,
// pero mola verlo
// console.log(module);

// asi recuperamos parametros escritos en la linea de comando sin el yarg, pero es un descontrol, desordenados etc
// const argumentos = process.argv.slice(2);
//
// if(argumentos.length !== 1) {
//   console.log("faltan los parametros");
//   return
// }

const base = argv.base;
const limite = argv.limite;
const comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(base, limite);
    break;
  case "crear":
    crearArchivo(base, limite)
      .then(mensaje => console.log(mensaje.red))
      .catch(err => console.log(err.red))
    break;
  default:
    console.log("comando especificado no válido".red);
}
