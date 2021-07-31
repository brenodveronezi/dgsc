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
}

module.exports.editaEndereco1 = function(application, req, res){
    dados = req.body;
    console.log(dados);
}

module.exports.editaEndereco2 = function(application, req, res){
    dados = req.body;
    console.log(dados);
}

module.exports.editaEndereco3 = function(application, req, res){
    dados = req.body;
    console.log(dados);
}

module.exports.editaEndereco4 = function(application, req, res){
    dados = req.body;
    console.log(dados);
}

module.exports.editaPassagem1 = function(application, req, res){
    dados = req.body;
    console.log(dados);
}

module.exports.editaPassagem2 = function(application, req, res){
    dados = req.body;
    console.log(dados);
}

module.exports.editaPassagem3 = function(application, req, res){
    dados = req.body;
    console.log(dados);
}

module.exports.editaPassagem4 = function(application, req, res){
    dados = req.body;
    console.log(dados);
}