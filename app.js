const { options } = require('yargs');
const { crearArchivo } = require('./multiplicar');
const { argv } = require('./config/yargs');

console.clear();
//listar boolean opcional default false

crearArchivo(argv.base, argv.list, argv.hasta)
.then(nombreArchivo=>console.log(nombreArchivo, 'creado'))
.catch(err=>console.log(err));


