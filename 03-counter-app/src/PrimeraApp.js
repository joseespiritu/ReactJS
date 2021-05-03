import React from 'react';

const PrimeraApp = () => {

    const saludo = 'Hola Mundo';

    const usuario = {
        nombre: 'Jose',
        edad: 24
    }

    return (
        <>
            <h1>{saludo}</h1>
            <pre>{JSON.stringify(usuario, null, 3)}</pre>
            <p>Mi primer aplicación</p>
        </>
    );
}

export default PrimeraApp;