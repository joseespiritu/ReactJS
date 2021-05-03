import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {mensaje} ) => {

    const saludo = 'Hola Mundo';

    const usuario = {
        nombre: 'Jose',
        edad: 24
    }

    return (
        <>
            <h1>{mensaje}</h1>
            <pre>{JSON.stringify(usuario, null, 3)}</pre>
            <p>Mi primer aplicación</p>
        </>
    );
}

PrimeraApp.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default PrimeraApp;