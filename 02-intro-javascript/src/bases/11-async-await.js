

// Manera de hacerlo con promesas
/* const getImagen = () => new Promise(resolve => resolve('https://imagen.com'));
getImagen().then(console.log); */

// Manera asyncrona con async await
const getImagen = async() => {
    try {
        const apiKey = 'GzkqQqgm5Lq9he9oqmB5hJrEaHcSgsTg';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo de errores
        console.error(error);
    }
}

getImagen();
