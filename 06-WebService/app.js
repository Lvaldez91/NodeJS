const express = require('express');
const app = express();
const port = 8080;
app.get('/', function (req, res) {
    res.send('Home Page');
});

app.get('/hello-world', function (req, res) {
    res.send('Hello World with root');
});

app.get('*', function (req, res) {
    res.send('404 | Page not found');
});

app.get(port, () =>{
    console.log(`Example app listenin at http://localhost:${port}`);
});

app.listen(port);