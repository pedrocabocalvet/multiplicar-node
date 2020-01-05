const opts = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    default: 10
  }
};

// dependecia de npm yargs para recibir parametros por consola, desordenados, pone alias, defaults, requeridos, help
const argv = require('yargs')
             .command("crear","crea un fichero con la tabla de multiplicar hasta el 10, de la base puesta", opts)
             .command("listar","lista la tabla de multiplicar de la base puesta",opts)
             .help()
             .argv;

module.exports = {
  argv
}
