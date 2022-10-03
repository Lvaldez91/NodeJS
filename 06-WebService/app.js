
// documentation: https://nodejs.org/docs/latest-v17.x/api/https.html#httpscreateserveroptions-requestlistener
const http = require('http');

// callback: solicitud/responde el server
http.createServer((request, response) => {
    response.write('Hello World');
    response.end();
}).listen(8080);


console.log('Listen to port' + 8080);