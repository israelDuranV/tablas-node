const fs = require('fs');
var colors = require('colors/safe');

const crearArchivo = async (base = 5, list = false, hasta = 10) =>{
        try{
            let salida = "";
            let salida_consola = "";
            const nombreArchivo = `tabla-${base}-hasta-${hasta}.txt`;
            for(i=1; i<=hasta; i++){
                salida += `${base} x ${i} = ${base * i}\n`;
                salida_consola += `${colors.blue(base)} ${colors.yellow('x')} ${colors.green(i)} = ${colors.bgMagenta(base * i)}\n`;
            }
            if(list){
                console.log('==================');
                console.log('Tabla del: ', colors.red(base), "hasta el número ", hasta);
                console.log('==================');
                console.log(salida_consola);
            }
            fs.writeFileSync('./salida/'+nombreArchivo, salida)
            return nombreArchivo;
        }catch(err){
            return err;
        }
}
module.exports = {
    crearArchivo
}