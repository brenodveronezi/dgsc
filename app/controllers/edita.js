module.exports.editaSuspeitoPessoais = function(application, req, res){

    var dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
	var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaPessoais(dados, req, res);
}

module.exports.editaCaracteristicas = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
	var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaCaracteristicasSuspeito(dados, req, res);
}

module.exports.editaEndereco1 = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaSuspeitoEndereco1(dados, req, res);
}

module.exports.editaEndereco2 = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaSuspeitoEndereco2(dados, req, res);
}

module.exports.editaEndereco3 = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaSuspeitoEndereco3(dados, req, res);
}

module.exports.editaEndereco4 = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaSuspeitoEndereco4(dados, req, res);
}

module.exports.editaPassagem1 = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaSuspeitoPassagem1(dados, req, res);
}

module.exports.editaPassagem2 = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaSuspeitoPassagem2(dados, req, res);
}

module.exports.editaPassagem3 = function(application, req, res){
    dados = req.body;
    console.log(dados);
    
    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaSuspeitoPassagem3(dados, req, res);
}

module.exports.editaPassagem4 = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaSuspeitoPassagem4(dados, req, res);
}

module.exports.editaTatuagens = function(application, req, res){
    dados = req.body;
    console.log(dados);

    var connection = application.config.dbConnection;
    var editaModel = new application.app.models.editaDAO(connection);

    editaModel.editaTatuagens(application, dados, req, res);
}