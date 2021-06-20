module.exports.consultaSuspeitos = function(application, req, res){
    var connection = application.config.dbConnection;
	var consultaModel = new application.app.models.consultaDAO(connection);

	consultaModel.exibeSuspeitos(req, res);
}

module.exports.cadastroSuspeito = function(application, req, res){
    const id = req.query.id;
    var connection = application.config.dbConnection;
	var cadastroSuspeitoModel = new application.app.models.consultaDAO(connection);

	cadastroSuspeitoModel.cadastroSuspeito(id, req, res);

}
