const Sequelize = require('sequelize');


const connection = new Sequelize('guiaperguntas','root','Mysql@47331197',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;