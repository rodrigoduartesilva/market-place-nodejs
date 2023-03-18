const express = require('express');
require('dotenv').config();
const connectToDatabase = require('./src/database/database'); //arquivo de conexao com o banco

const usuario = require('./src/router/usuario.router'); //arquivo de rota do usuário
const auth = require('./src/router/auth.router'); //arquivo de rota do auth
const produto = require('./src/router/produto.router'); //arquivo de rota do produto
const categoria = require('./src/router/categoria.router'); //arquivo de rota da categoria
const carrinho = require('./src/router/carrinho.router'); //arquivo de rota do carrinho
const pedido = require('./src/router/pedido.router'); //arquivo de rota do pedido

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco

app.use('/usuario', usuario); //chamando as rotas do usuário
app.use('/auth', auth); //chamando a rota de autenticação
app.use('/produto', produto); //chamando as rotas de produto
app.use('/categoria', categoria); //chamando as rotas de categoria
app.use('/carrinho', carrinho); //chamando as rotas do carrinho
app.use('/pedido', pedido); //chamando as rotas do pedido

app.get('/', (req, res) => {
    res.send({
        message: 'Bem-vindo ao nosso marketplace.'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});