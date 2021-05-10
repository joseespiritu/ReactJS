

describe('Pruebas del archivo demo.test.js', () => {

    test('deben de ser iguales los strings', () => {
        // Incialización
        const mensaje = 'Hola Mundo';
    
        // Estímulo
        const mensaje2 = `Hola Mundo`;
    
        // Validación
        expect(mensaje).toBe(mensaje2); // ===
    });
    
});
