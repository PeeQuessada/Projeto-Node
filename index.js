const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const Sequelize = require('sequelize');

// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Conexão com o banco de dados MySql
    const sequelize = new Sequelize('teste', 'root', 'Ckda@3301', {
        host: "localhost",
        dialect: 'mysql'
    });

//Rotas
    app.get('/cad', (req, res)=>{
        res.render('formulario');
    })


app.listen(5500, ()=>{
    console.log('servidor rodando');
});