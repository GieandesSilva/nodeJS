var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        var mysql = require('mysql');
        
        var connection = connectionFactory();

        connection.connect(function (error) {

        	if(!!error) {

        		console.log('Error');
        	} else {

        		console.log('Connected');
        	}
        });

        connection.query('select * from livros', function(err, results) {

        	if(!!err) {

	            console.log(err);
        	} else {

	            res.render('produtos/lista',{lista:results});
        	}
        });

        connection.end();

    });
}