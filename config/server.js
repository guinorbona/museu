// config/server.js
const express = require('express');
const path = require('path');

const app = express();

// Configurações
const porta = process.env.PORT || 3000;

// Configura o motor de visualização (view engine)
app.set('view engine', 'ejs');
app.set('views', './app/views'); // definindo o local das views

// Configura a pasta pública para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(porta, function(){
    console.log('Servidor rodando na porta', porta,'\n');
});

// Função que retorna o app e a porta
module.exports = app;