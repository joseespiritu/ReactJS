
// Template Strings

const nombre = 'José';
const apellido = 'Espíritu';

//console.log(nombre + ' ' + apellido);
console.log(` ${ nombre } ${ apellido } `);

function getTexto(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getTexto(nombre)}`);