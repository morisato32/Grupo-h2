const loginCadastro = require('express').Router();

loginCadastro.get('/login/cadastro',(req,res) =>{
    res.render('loginCadastro.ejs');
})

module.exports = loginCadastro;