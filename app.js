var app = require('./config/express')(); // Carrega uma função automática da página express e armazena na variável app

app.listen(3000, function() { // Escuta o servidor na porta 3000 e retorna que está rodando

	console.log('servidor está rodando');
});