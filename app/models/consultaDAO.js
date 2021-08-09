function consultaDAO(connection){
	this._connection = connection;
}

consultaDAO.prototype.exibeSuspeitos = function(req, res){
    const exibe = {
        //text: 'SELECT id,nome,cpf FROM suspeitos ORDER BY nome ASC;'
        text: 'SELECT s.id,s.nome,s.cpf,t.ckrosto,t.ckcostas_d,t.ckpeito_d,t.ckbarriga_d,t.ckperna_d,t.ckperna_d,t.ckpe_d,t.ckbraco_d,t.ckantebraco_d,t.ckmao_d,t.ckpescoco_d,t.ckcostas_e,t.ckpeito_e,t.ckbarriga_e,t.ckperna_e,t.ckpe_e,t.ckbraco_e,t.ckantebraco_e,t.ckmao_e,t.ckpescoco_e,t.ckcicatriz,t.ckdeformidade FROM suspeitos s, tatuagem_local t WHERE s.id = t.id_suspeito ORDER BY s.nome ASC;'
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se ao BD:', err)
        }
        client.query(exibe, (err, result) => {
            if(err){
                return console.log('Erro ao consultar BD:', err)
            }else{
                //console.log(result.rows);
                res.render('consulta', {suspeito: result.rows});
            }
        })
    })
}

consultaDAO.prototype.cadastroSuspeito = function(id, req, res){
    const consulta = {
        text: 'SELECT * FROM suspeitos WHERE id = $1',
        values: [id],
    }

    const caracteristicas_suspeito = {
        text: 'SELECT * from caracteristicas_suspeito WHERE id_suspeito = $1',
        values: [id],
    }

    const enderecos = {
        text: 'SELECT * FROM enderecos_suspeito WHERE id_suspeito = $1',
        values: [id],
    }

    const passagens = {
        text: 'SELECT * FROM passagens_suspeito WHERE id_suspeito = $1',
        values: [id],
    }

    const tatuagem_local = {
        text: 'SELECT * FROM tatuagem_local WHERE id_suspeito = $1',
        values: [id],
    }

    const caracteristicas_tatuagem = {
        text: 'SELECT * FROM caracteristicas_tatuagem WHERE id_suspeito = $1',
        values: [id],
    }

    this._connection.connect((err, client, release) => {
        if(err){
            return console.log('Erro ao conectar-se ao BD:', err)
        }
        client.query(consulta, (err, result) => {
            if(err){
                return console.log('Erro ao consultar no BD:', err)
            }else{
                client.query(caracteristicas_suspeito, (err, resultC) => {
                    if(err){
                        return console.log('Erro ao realizar consulta no BD:', err)
                    }else{
                        client.query(enderecos, (err, resultE) => {
                            if(err){
                                return console.log('Erro ao realizar consulta no BD:', err)
                            }else{
                                client.query(passagens, (err, resultP) => {
                                    if(err){
                                        return console.log('Erro ao consultar no BD:', err)
                                    }else{
                                        client.query(tatuagem_local, (err, resultT) => {
                                            if(err){
                                                return console.log('Erro ao consultar no BD:', err);
                                            }else{
                                                client.query(caracteristicas_tatuagem, (err, resultCT) => {
                                                    if(err){
                                                        return console.log('Erro ao consultar no BD:', err)
                                                    }else{
                                                       // console.log(id);
                                                       // console.log(result.rows);
                                                       // console.log(resultC.rows)
                                                       // console.log(resultE.rows);
                                                       // console.log(resultP.rows);
                                                        res.render('consultaCadastro', {dados: result.rows, caracteristicas : resultC.rows, endereco : resultE.rows, passagem: resultP.rows, tatuagem_local: resultT.rows, tatuagem_caracteristicas: resultCT.rows});
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    })
}

module.exports = function(){
    return consultaDAO;
}