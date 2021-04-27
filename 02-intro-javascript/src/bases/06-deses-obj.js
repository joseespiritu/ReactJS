

// Desestructuración
// Asignación desestucturante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

/* const { clave, nombre, edad } = persona;
console.log(persona);
console.log(clave); */

const Context = ({edad, clave, nombre, rango = 'Soldado'}) => {

    //console.log(edad, clave, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1153516,
            lng: -12.2163522
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = Context(persona);

console.log(nombreClave, anios);
console.log(lat,lng);