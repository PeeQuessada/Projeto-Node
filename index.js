const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//Rotas
    app.get('/', (req, res) => {
        Post.findAll().then((posts) => {
            res.render('home', {posts: posts});
        })
        
    });

    app.get('/cad', (req, res) => {
        res.render('formulario');
    }); 


    app.get('/listar/:id', (req, res) => {
        Post.findAll({
            limit: 1,
            where: {'id': req.params.id}
          }).then((posts) => {
            res.render('atualizar', {posts: posts});
        })
    });

    app.post('/add', (req, res) => {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/');
        }).catch((error) => {
            res.send('Erro ao criar um post: ' + error);
        });

    }); 

    app.post('/atualizar', (req, res) => {
        console.log('body ==> ' + JSON.stringify(req.body));
        Post.update({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo},
        {
            where: {'id': req.body.id}
        }).then(() => {
            res.redirect('/');
        }).catch((error) => {
            res.send('Erro ao atualizar postagem: ' + error);
        })

    });
    
    app.get('/deletar/:id', (req, res) => {
        Post.destroy({where: {'id': req.params.id}})
        .then(() => {
            res.send('Postagem deletada com sucesso');
        }).catch((error) => {
            res.send('Essa postagem nao existe! ' + error);
        })
    });




app.listen(8081, () => {
    console.log('servidor rodando');
});