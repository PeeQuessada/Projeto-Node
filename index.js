const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json())

    //Conexão com o banco de dados MySql
    const sequelize = new Sequelize('postapp', 'root', 'Ckda@3301', {
        host: "localhost",
        dialect: 'mysql'
    });

//Rotas
    app.get('/cad', (req, res) => {
        res.render('formulario');
    }) 

    app.post('/add', (req, res) => {
        res.send("Texto: " + req.body.titulo + " post: " + req.body.conteudo);
    }); 


app.listen(8081, () => {
    console.log('servidor rodando');
});