var express = require('express'); // Responsável pelo carregamento do Express
var load = require('express-load'); // Responsável pelo carregamento do express-load

module.exports = function() { // Exporta a função reponsável pelo view engine e routes

	var app = express(); // Invoca o objeto express e armazena na variável app 

	app.set('view engine','ejs'); // Seta a engine utilizada e o formato dos arquivos 
	app.set('views', './app/views'); // Seta o diretório onde serão encontradas as páginas
	
	load('routes', {cwd: 'app'}) // Carrega os arquivos das rotas 
	.then('infra') // Carrega os arquivos de infra
	.into(app); // Inclue automáticamente os arquivos de rotas e infra em app
	return app;
}