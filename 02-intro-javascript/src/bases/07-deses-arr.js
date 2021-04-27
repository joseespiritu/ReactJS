

// Desestructuracion de objetos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

//const [p1,p2,p3] = personajes;

//Tambien se puede realizar de la siguiente manera
const [ , , p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 1234];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const state = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = state('Jose');

console.log(nombre);
setNombre(); // el equivalente a esto es arr[1]()