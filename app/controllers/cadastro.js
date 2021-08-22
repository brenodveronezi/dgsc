module.exports.user = function(application, req, res){
    res.render('cadastro');
}

module.exports.cadastra_user = function (application, req, res){
    dados = req.body;
    console.log(dados);


    /*
    data1 = dados.img_value;

    //data2 = dados.img_value2;

    var base64Data = data1.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile("app/images/avatar1.png", base64Data, 'base64', function(err) {
    if(err){
        console.log(err);
    }else{
        console.log('imagem 1 upada!')
        alert('Suspeito cadastrado!')
    }
    });

    /*

    /*var base64Data2 = data2.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile("app/images/avatar2.png", base64Data2, 'base64', function(err) {
    if(err){
        console.log(err);
    }else{
        console.log('imagem 2 upada!')
    }
    });
*/

    var connection = application.config.dbConnection;
	var cadastroModel = new application.app.models.cadastraDAO(connection);

	cadastroModel.insertUsuarios(dados, req, res);
}