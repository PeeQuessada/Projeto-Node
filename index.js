const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + '/html/sobre.html');
});

app.get("/blog", (req, res) => {
    res.send('Bem-vindo ao meu blog');
});

app.get("/ola/:nome", (req, res) => {
    res.send('Ola ' + req.params.nome );
});


app.listen(5500, () => {
    console.log('servidor rodando');
});