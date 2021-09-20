function editaDAO(connection){
	this._connection = connection;
}


editaDAO.prototype.editaPessoais = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE suspeitos SET nome = $1, apelido = $2, cpf = $3, rg = $4, dt_nascimento = $5, nome_pai = $6, nome_mae = $7  WHERE id = $8',
        values:[dados.nome, dados.apelido, dados.cpf, dados.rg, dados.dt_nascimento, dados.nome_pai, dados.nome_mae, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}

editaDAO.prototype.editaCaracteristicasSuspeito = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE caracteristicas_suspeito SET estado_civil = $1, cor_pele = $2, cor_olhos = $3, tipo_cabelo = $4, cor_cabelo = $5, peso = $6, altura = $7 WHERE id_suspeito = $8',
        values:[dados.estado_civil, dados.cor_pele, dados.cor_olhos, dados.tipo_cabelo, dados.cor_cabelo, dados.peso, dados.altura, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}

editaDAO.prototype.editaSuspeitoEndereco1 = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE enderecos_suspeito SET rua1 = $1, cidade1 = $2, estado1 = $3, numero1 = $4, complemento1 = $5 WHERE id_suspeito = $6',
        values:[dados.rua1, dados.cidade1, dados.estado1, dados.numero1, dados.complemento1, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}

editaDAO.prototype.editaSuspeitoEndereco2 = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE enderecos_suspeito SET rua2 = $1, cidade2 = $2, estado2 = $3, numero21 = $4, complemento2 = $5 WHERE id_suspeito = $6',
        values:[dados.rua2, dados.cidade2, dados.estado2, dados.numero2, dados.complemento2, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}

editaDAO.prototype.editaSuspeitoEndereco3 = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE enderecos_suspeito SET rua3 = $1, cidade3 = $2, estado3 = $3, numero3 = $4, complemento3 = $5 WHERE id_suspeito = $6',
        values:[dados.rua3, dados.cidade3, dados.estado3, dados.numero3, dados.complemento3, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}


editaDAO.prototype.editaSuspeitoEndereco4 = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE enderecos_suspeito SET rua4 = $1, cidade4 = $2, estado4 = $3, numero4 = $4, complemento4 = $5 WHERE id_suspeito = $6',
        values:[dados.rua4, dados.cidade4, dados.estado4, dados.numero4, dados.complemento4, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}

editaDAO.prototype.editaSuspeitoPassagem1 = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE passagens_suspeito SET data1 = $1, procedimento1 = $2, artigo1 = $3, lei1 = $4, historico1 = $5 WHERE id_suspeito = $6',
        values:[dados.data1, dados.procedimento1, dados.artigo1, dados.lei1, dados.historico1, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}

editaDAO.prototype.editaSuspeitoPassagem2 = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE passagens_suspeito SET data2 = $1, procedimento2 = $2, artigo2 = $3, lei2 = $4, historico2 = $5 WHERE id_suspeito = $6',
        values:[dados.data2, dados.procedimento2, dados.artigo2, dados.lei2, dados.historico2, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}

editaDAO.prototype.editaSuspeitoPassagem3 = function(dados, req, res){
    console.log(dados)
    const editaPessoais = {
        text: 'UPDATE passagens_suspeito SET data3 = $1, procedimento3 = $2, artigo3 = $3, lei3 = $4, historico3 = $5 WHERE id_suspeito = $6',
        values:[dados.data3, dados.procedimento3, dados.artigo3, dados.lei3, dados.historico3, dados.id]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaPessoais, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update no BD:', err)
            }else{
                console.log('OK');
            }
        })
    })
}

editaDAO.prototype.editaTatuagens = function(application, dados, req, res){
    const editaTatuagensLocal = {
        text: `
               UPDATE tatuagem_local SET ckrosto = $1, ckcostas_d = $2, ckpeito_d = $3, ckbarriga_d = $4, ckperna_d = $5, ckpe_d = $6, ckbraco_d = $7, ckantebraco_d = $8,
               ckmao_d = $9, ckpescoco_d = $10, ckcostas_e = $11, ckpeito_e = $12, ckbarriga_e = $13, ckperna_e = $14, ckpe_e = $15, ckbraco_e = $16, ckantebraco_e = $17,
               ckmao_e = $18, ckpescoco_e = $19, ckcicatriz = $20, ckdeformidade = $21 WHERE id_suspeito = $22
               `,
        values:[
                dados.ckrosto,dados.ckcostas_d,dados.ckpeito_d,dados.ckbarriga_d,dados.ckperna_d,dados.ckpe_d,dados.ckbraco_d,dados.ckantebraco_d,dados.ckmao_d,dados.ckpescoco_d,
                dados.ckcocstas_e,dados.ckpeito_e,dados.ckbarriga_e,dados.ckperna_e,dados.ckpe_e,dados.braco_e,dados.antebraco_e,dados.ckmao_e,dados.ckpescoco_e,dados.ckcicatriz,
                dados.ckdeformidade, dados.id
               ]
    }

    const editaTatuagensCaracteristicas = {
        text: `
                UPDATE caracteristicas_tatuagem SET txtrosto = $1, txtcostas_d = $2, txtpeito_d = $3, txtbarriga_d = $4, txtperna_d = $5, txtpe_d = $6, txtbraco_d = $7, txtantebraco_d = $8,
                txtmao_d = $9, txtpescoco_d = $10, txtcostas_e = $11, txtpeito_e = $12, txtbarriga_e = $13, txtperna_e = $14, txtpe_e = $15, txtbraco_e = $16, txtantebraco_e = $17,
                txtmao_e = $18, txtpescoco_e = $19, txtcicatriz = $20, txtdeformidade = $21 WHERE id_suspeito = $22
              `,
        values:[
                dados.txtrosto,dados.txtcostas_d,dados.txtpeito_d,dados.txtbarriga_d,dados.txtperna_d,dados.txtpe_d,dados.txtbraco_d,dados.txtantebraco_d,dados.txtmao_d,dados.txtpescoco_d,
                dados.txtcostas_e,dados.txtpeito_e,dados.txtbarriga_e,dados.txtperna_e,dados.txtpe_e,dados.txtbraco_e,dados.txtantebraco_e,dados.txtmao_e,dados.txtpescoco_e,dados.txtcicatriz,
                dados.txtdeformidade,dados.id
               ]
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se no BD', err)
        }
        client.query(editaTatuagensLocal, (err, result) => {
            if(err){
                return console.log('Erro ao realizar update editaTatuagensLocal', err)
            }
            client.query(editaTatuagensCaracteristicas, (err, result) => {
                if(err){
                    return console.log('Erro ao realizar update editaTatuagensCaracteristicas', err)
                }
                var connection = application.config.dbConnection;
                var cadastroSuspeitoModel = new application.app.models.consultaDAO(connection);
            
                cadastroSuspeitoModel.cadastroSuspeito(dados.id, req, res);
            })
        })
    })
}

module.exports = function(){
    return editaDAO;
}