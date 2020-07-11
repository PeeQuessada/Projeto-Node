const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'Ckda@3301', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('conectado com sucesso!');       
    }).catch((error) => {
        console.log('falha ao se conectar! \nerro: ' + error);
    });