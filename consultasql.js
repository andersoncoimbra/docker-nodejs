var mysql      	= require('mysql');

exports.consultaMyql = (Sql) => {
	return new Promise((resolve, reject) => {
		// Servidor
		var connection = mysql.createConnection({
		  host     : 'db',
		  user     : 'root',
		  password : '',
		  database : 'saude_sistema'
		});

		// var connection = mysql.createConnection({
		//   host     : 'localhost',
		//   user     : 'root',
		//   password : '',
		//   database : 'saude_investimentos'
		// });

		connection.connect();

		connection.query(Sql, function (error, results, fields) {
		  	if (error) {
		  		setTimeout(function() {
		  			reject(null);
		  		}, 5000);
		  	}
			// setTimeout(function() {
			  	connection.end();
			  	resolve(results);
			// }, 3000);
		});
	});
}