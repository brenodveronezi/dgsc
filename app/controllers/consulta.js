module.exports.consultaSuspeitos = function(application, req, res){
	const params = req.query;
	console.log(params)

    var connection = application.config.dbConnection;
	var consultaModel = new application.app.models.consultaDAO(connection);

	consultaModel.exibeSuspeitos(params, req, res);
}

module.exports.cadastroSuspeito = function(application, req, res){
    const id = req.query.id;
    var connection = application.config.dbConnection;
	var cadastroSuspeitoModel = new application.app.models.consultaDAO(connection);

	cadastroSuspeitoModel.cadastroSuspeito(id, req, res);

}

module.exports.cadastroSuspeitoPDF = function(application, req, res){
    const id = req.query.id;
    var connection = application.config.dbConnection;
	var cadastroSuspeitoPDFModel = new application.app.models.consultaDAO(connection);

	cadastroSuspeitoPDFModel.cadastroSuspeitoPDF(id, application, req, res);

}

module.exports.consultaPersonalizada = function(application, req, res){
    //const dados = req.body;
	const params = req.params;
	console.log(params);

    //var connection = application.config.dbConnection;
	//var consultaPersonalizadaModel = new application.app.models.consultaPersonalizadaDAO(connection);

	//consultaPersonalizadaModel.consultaPersonalizadaSuspeito(dados, req, res);
 
}