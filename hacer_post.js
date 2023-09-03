const fetch = require('node-fetch'); // Importar la biblioteca node-fetch para realizar solicitudes HTTP

const apiUrl = 'http://localhost/wordpress/wp-json/wp/v2/posts'; // Reemplaza con la URL de tu sitio y la ruta de la API que desees usar
const username = 'alberte'; // Reemplaza con tu nombre de usuario
const password = '.123.'; // Reemplaza con tu contraseña

const base64Credentials = Buffer.from(username + ':' + password).toString('base64');

const postData = {
    title: 'Mi Nueva Entrada',
    content: '\
<!DOCTYPE html>\
<html lang="en">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <title>Crear Entrada en WordPress</title>\
</head>\
<body>\
    <h1>Texto de ejemplo de una entrada</h1>\
    <main>\
        <a href="https://comoinstalar.me/como-instalar-wordpress-en-ubuntu-22-04-lts/">Pagina de instalación de wordpress completo</a>\
        <p>El problema principal era que al crear el wordpress, en el manual de clase no añadimos a la configuración de apache el archivo wordpress.conf. Esto creaba problemas con el .htaccess, impidiendo el uso del la autenticación con api rest.</p>\
        <ul>\
            <li>Lista 1</li>\
            <li>Lista 2</li>\
            <li>Lista 3</li>\
        </ul>\
    </main>\
</body>\
</html>\
',
    status: 'publish',
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + base64Credentials,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
})
    .then(response => response.json())
    .then(data => {
        console.log('Entrada creada:', data);
    })
    .catch(error => {
        console.error('Error al crear la entrada:', error);
    });
