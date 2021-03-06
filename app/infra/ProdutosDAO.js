function ProdutosDAO(connection) { //Passa a conexão como parâmetro

	this._connection = connection;
}	


ProdutosDAO.prototype.lista = function(callback) { // Recebe o resultado do banco através do callback

	this._connection.query('select * from livros', callback); // Busca tudo de Livros e grava em callback
}

ProdutosDAO.prototype.salva = function(produto, callback) { // Recebe o produto retornado através do callback
	this._connection.query('insert into livros set ?', produto, callback); // Adiciona o produto enviado e grava no banco de dados
}

module.exports = function() { // Exporta o retorno da função com o resultado buscado no banco

	return ProdutosDAO;  // Retorna o resultado do banco
}