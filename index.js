// Importa o módulo Express, um framework para aplicações web em Node.js
const express = require('express');
// Cria uma instância do aplicativo Express
const app = express();

// Define o mecanismo de visualização como EJS (Embedded JavaScript Templates)
app.set('view engine', 'ejs');

// Define uma rota GET para o caminho raiz ('/')
// Quando um usuário acessa '/', envia a resposta 'Hello, World!'
app.get('/', (req, res) => {
    var nome = "Wescley Fontes";
    var lang = "JavaScript";
    res.render("index", { title: 'Hello World', nome: nome, lang: lang });
});

// Inicia o servidor na porta 3000
// Exibe uma mensagem no console indicando que o servidor está rodando
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});