
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 66005,
        lat: 14.26256,
        lng: 32.3216556,
    }
}


const persona2 = {...persona}; // copia del objeto persona, no referencia
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);