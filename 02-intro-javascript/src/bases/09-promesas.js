import getHeroeById from '../src/bases/08-import-export'

/* const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const heroe = getHeroeById(1);
        resolve(heroe);
        //reject('No se ha podido encontrar el heroe');
    }, 2000);

});

promesa.then((heroe) => {
    console.log("Heroe: ", heroe);
})
.catch((err) => console.warn(err)); */


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            } else {
                reject('No se ha podido encontrar el heroe');
            }
        }, 2000);
    
    });
}

// Manera Convencional
/* getHeroeByIdAsync(10)
.then(heroe => console.log('Heroe: ', heroe))
.catch(error => console.warn(error)); */


// Si solo se regresa un argumento se puede enviar a esa funcion de esta manera
getHeroeByIdAsync(10)
.then(console.log)
.catch(console.warn);
