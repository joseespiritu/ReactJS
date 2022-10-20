import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: '',
    secure: true
});

describe('Pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        // console.log({ url });
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });
    });

    test('debe de retornar null', async () => {
        const blob = null;
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
});