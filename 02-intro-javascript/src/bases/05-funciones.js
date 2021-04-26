
// Funciones en JS

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Jose'));

console.log(saludar);
console.log(saludar2);
console.log(saludar3('Jose'));
console.log(saludar4());

const getUser = () =>  (
    {
    uuid: 'ABC123',
        username: 'Jose15615'
    }
);

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => (
    {
        uuid: 'ABC1156',
        username: nombre
    }
);

const usuarioActivo = getUsuarioActivo('Jose');
console.log(usuarioActivo);
