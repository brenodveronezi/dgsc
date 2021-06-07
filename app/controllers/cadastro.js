module.exports.user = function(application, req, res){
    res.render('cadastro');
}

module.exports.cadastra_user = function (application, req, res){
    dados = req.body;
    console.log(dados);
    var connection = application.config.dbConnection;
	var cadastroModel = new application.app.models.cadastraDAO(connection);

	cadastroModel.insertUsuarios(dados, req, res);
}