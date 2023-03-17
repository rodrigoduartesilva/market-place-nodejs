const express = require('express');
require('dotenv').config();
const connectToDatabase = require('./src/database/database'); //arquivo de conexao com o banco
const usuario = require('./src/router/usuario.router'); //arquivo de rota do usuário
const auth = require('./src/router/auth.router'); //arquivo de rota do auth

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco

app.use('/usuario', usuario); //chamando as rotas do usuário
app.use('/auth', auth); //chamando a rota de autenticação

app.get('/', (req, res) => {
    res.send({
        message: 'Bem-vindo ao nosso marketplace.'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});