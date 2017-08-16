
module.exports = function(app) { // Exporta uma função com o resultado da Conexão
    app.get("/produtos",function(req, res) { // Busca a pasta produtos na Views e retorna um erro ou resultado através dos parâmetros

        var connection = app.infra.connectionFactory();  //// Recebe a Conexão do banco de dados e armazena na variável connection

        connection.connect(function (error) { // Verifica o sucesso ou erro da conexão

        	if(!!error) {

        		console.log('Error');
        	} else {

        		console.log('Connected');
        	}
        });

        var produtosBanco = new app.infra.ProdutosDAO(connection); // Recebe o que foi exportado de produtosBanco utilizando a conexão enviada como parâmetro e grava na variável produtosBanco

        produtosBanco.lista(function(erros, resultados) { // Recebe o callback de .lista(), ou os erros caso ocorram

            res.render('produtos/lista',{lista:resultados}); // renderizaem lista na Views os resultados em JSON.
        });

        connection.end(); // Finaliza a Conexão

    });

    app.get('produtos/remove', function() {

    	var connection = app.infra.connectionFactory();
    	var produtosBanco = new app.infra.ProdutosDAO(connection);
    	var produto = produtosBanco.carrega(id, callback);
    	if (produto) {

    		produtosBanco.remove(produto, callback);
    	}
    });
}