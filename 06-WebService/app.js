const express = require('express');
const app = express();
const port = 8081;

app.set('view engine', 'hbs');

//Middleware - contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.get(port, () =>{
    console.log(`Example app listenin at http://localhost:${port}`);
});

app.listen(port);