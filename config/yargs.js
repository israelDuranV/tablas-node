const argv = require('yargs')
.option(
    'b',{
        alias:'base',
        type:'number',
        demandOption: true,
        describe: "Es la base de la tabla  de multiplicar"
    }
)
.option(
    'l', {
    alias:'list',
    type:'boolean',
    default:false,
    describe: "Muestra la tabla en consola"
    }
)
.option(
    'h', {
    alias:'hasta',
    type:'number',
    default: 10,
    describe: "Define hasta que número va a llegar la tabla"
    }
)
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número';
    }
    return true
})
.argv;

module.exports = {
    argv
}