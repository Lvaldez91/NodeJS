const express = require('express');
const app = express();
const port = 8080;

//Middleware - contenido estatico
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.send('Home Page');
});

app.get('/hello-world', function (req, res) {
    res.send('Hello World with root');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.get(port, () =>{
    console.log(`Example app listenin at http://localhost:${port}`);
});

app.listen(port);