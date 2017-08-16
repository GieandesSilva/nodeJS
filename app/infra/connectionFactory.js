var mysql = require('mysql'); // Responsável pela importação do Mysql

function createDBConnection() { // Responsável pela criação da conexão com o banco 

	return  mysql.createConnection({ // Cria a conexão com o banco de dados, neste caso o casadocodigo_nodejs
		
		host : 'localhost',
		user : 'root',
		password : '', 
		database : 'casadocodigo_nodejs'
	});
}

module.exports = function() { // Wrapper -> Responsável por retornar a função createDBConnection, evitando o carregamento automático ao banco ao iniciar o sistema

	return createDBConnection;
}