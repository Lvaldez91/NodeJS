
// documentation: https://nodejs.org/docs/latest-v17.x/api/https.html#httpscreateserveroptions-requestlistener
const http = require('http');

// callback: solicitud/responde el server
http.createServer((request, response) => {
    console.log(request);
    // declara un text-plain: response.writeHead(402,{'Content-Type':'text/plain'});
    // declara un json en el header
    response.writeHead(402,{'Content-Type':'application/json'});

    const persona = {
        id:1,
        name:'Luz Valdez'
    };
    response.write(JSON.stringify(persona));
    //response.write('404 | Page not found');
    //response.write('Hello World');
    response.end();
}).listen(8080);


console.log('Listen to port' , 8080);


