
const activo = true;

// Manera tradicional de if else
/* let mensaje = '';
if(!activo){
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
} */

// Manera con ternarios
//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//const mensaje = (activo) ? 'Activo' : null;

// Manera de manejarlo sin else
const mensaje = !activo && 'Activo';

console.log(mensaje);