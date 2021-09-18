function consultaDAO(connection){
	this._connection = connection;
}

consultaDAO.prototype.exibeSuspeitos = function(params, req, res){
    console.log('o param', params.value);

    if(Object.keys(params).length === 0){
        const exibe = {
            text: 'SELECT suspeitos.id, suspeitos.nome, suspeitos.cpf,suspeitos.apelido,TO_CHAR(suspeitos.dt_nascimento, \'DD/MM/YYYY\') dt_nascimento,fotos_suspeito.foto_principal FROM suspeitos INNER JOIN fotos_suspeito ON fotos_suspeito.id_suspeito = suspeitos.id'
            //text: 'SELECT id,nome,cpf FROM suspeitos ORDER BY nome ASC;'
            //text: 'SELECT s.id,s.nome,s.cpf,t.ckrosto,t.ckcostas_d,t.ckpeito_d,t.ckbarriga_d,t.ckperna_d,t.ckperna_d,t.ckpe_d,t.ckbraco_d,t.ckantebraco_d,t.ckmao_d,t.ckpescoco_d,t.ckcostas_e,t.ckpeito_e,t.ckbarriga_e,t.ckperna_e,t.ckpe_e,t.ckbraco_e,t.ckantebraco_e,t.ckmao_e,t.ckpescoco_e,t.ckcicatriz,t.ckdeformidade FROM suspeitos s, tatuagem_local t WHERE s.id = t.id_suspeito ORDER BY s.nome ASC;'
        }

        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Erro ao conectar-se ao BD:', err)
            }
            client.query(exibe, (err, result) => {
                if(err){
                    return console.log('Erro ao consultar BD:', err)
                }else{
                    console.log(result.rows);
                    res.render('consulta', {suspeito: result.rows, params: {}});
                }
            })
        })

    }else{
        var consulta = [];
        Object.entries(params).forEach(([key, value]) => {
            if(value == 'on'){
                consulta.push(key);
                console.log(consulta);
            }

        })

        var consultaTatuagem = '';
        if(consulta.length >= 0){
            for(var i = 0; consulta.length > i; i++){
                if(i == consulta.length -1){
                    console.log(consulta[i]);
                    consultaTatuagem += consulta[i] + " = '1'";
                }else{
                    console.log(consulta[i] + ',');
                    consultaTatuagem += consulta[i] + " = '1' " + 'AND' + ' ';
                }

            }
        }

        consultaTatuagem = 'SELECT s.id,s.nome,s.cpf FROM suspeitos s, tatuagem_local t WHERE s.id = t.id_suspeito AND ' + consultaTatuagem;

        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Erro ao conectar-se ao BD:', err)
            }
            client.query(consultaTatuagem, (err, result) => {
                if(err){
                    return console.log('Erro ao consultar BD:', err)
                }else{
                    res.render('consulta', {suspeito: result.rows, params:params});
                }
            })
        })
    }
}

consultaDAO.prototype.identificarSuspeitos = function(params, req, res){
    console.log('o param', params.value);

    if(Object.keys(params).length === 0){
        const exibe = {
            text: 'SELECT suspeitos.id, suspeitos.nome, suspeitos.cpf,suspeitos.apelido,TO_CHAR(suspeitos.dt_nascimento, \'DD/MM/YYYY\') dt_nascimento,fotos_suspeito.foto_principal FROM suspeitos INNER JOIN fotos_suspeito ON fotos_suspeito.id_suspeito = suspeitos.id'
            //text: 'SELECT id,nome,cpf FROM suspeitos ORDER BY nome ASC;'
            //text: 'SELECT s.id,s.nome,s.cpf,t.ckrosto,t.ckcostas_d,t.ckpeito_d,t.ckbarriga_d,t.ckperna_d,t.ckperna_d,t.ckpe_d,t.ckbraco_d,t.ckantebraco_d,t.ckmao_d,t.ckpescoco_d,t.ckcostas_e,t.ckpeito_e,t.ckbarriga_e,t.ckperna_e,t.ckpe_e,t.ckbraco_e,t.ckantebraco_e,t.ckmao_e,t.ckpescoco_e,t.ckcicatriz,t.ckdeformidade FROM suspeitos s, tatuagem_local t WHERE s.id = t.id_suspeito ORDER BY s.nome ASC;'
        }

        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Erro ao conectar-se ao BD:', err)
            }
            client.query(exibe, (err, result) => {
                if(err){
                    return console.log('Erro ao consultar BD:', err)
                }else{
                    console.log(result.rows);
                    res.render('identificarSuspeitos', {suspeito: result.rows, params: {}});
                }
            })
        })

    }else{
        var consulta = [];
        Object.entries(params).forEach(([key, value]) => {
            if(value == 'on'){
                consulta.push(key);
                console.log(consulta);
            }

        })

        var consultaTatuagem = '';
        if(consulta.length >= 0){
            for(var i = 0; consulta.length > i; i++){
                if(i == consulta.length -1){
                    console.log(consulta[i]);
                    consultaTatuagem += consulta[i] + " = '1'";
                }else{
                    console.log(consulta[i] + ',');
                    consultaTatuagem += consulta[i] + " = '1' " + 'AND' + ' ';
                }

            }
        }

        consultaTatuagem = 'SELECT s.id,s.nome,s.cpf FROM suspeitos s, tatuagem_local t WHERE s.id = t.id_suspeito AND ' + consultaTatuagem;

        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Erro ao conectar-se ao BD:', err)
            }
            client.query(consultaTatuagem, (err, result) => {
                if(err){
                    return console.log('Erro ao consultar BD:', err)
                }else{
                    res.render('identificarSuspeitos', {suspeito: result.rows, params:params});
                }
            })
        })
    }
}




consultaDAO.prototype.cadastroSuspeito = function(id, req, res){
    const consulta = {
        text: 'SELECT id,nome,apelido,cpf,rg,TO_CHAR(dt_nascimento, \'DD/MM/YYYY\') as dt_nascimento,nome_pai,nome_mae,naturalidade FROM suspeitos WHERE id = $1',
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

consultaDAO.prototype.cadastroSuspeitoPDF = function(id, application, req, res){
    const consulta = {
        mode: 'array',
        text: 'SELECT s.id,s.nome,s.cpf,s.rg,TO_CHAR(s.dt_nascimento, \'DD/MM/YYYY\') AS dt_nascimento,s.nome_pai,s.nome_mae,s.naturalidade,f.foto_principal FROM suspeitos s, fotos_suspeito f WHERE s.id = f.id_suspeito AND s.id = $1',
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
        text: 'SELECT id_suspeito,TO_CHAR(ps.data1, \'DD/MM/YYYY\') AS data1,procedimento1,artigo1,lei1,historico1,TO_CHAR(ps.data2, \'DD/MM/YYYY\') AS data2,procedimento2,artigo2,lei2,historico2,TO_CHAR(ps.data3, \'DD/MM/YYYY\') AS data3,procedimento3,artigo3,lei3,historico3,TO_CHAR(ps.data4, \'DD/MM/YYYY\') AS data4,procedimento4,artigo4,lei4,historico4 FROM passagens_suspeito ps WHERE id_suspeito = $1',
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
 
                                                        application.app.controllers.pdf.pdf(application, res, result.rows, resultC.rows, resultE.rows, resultP.rows, resultT.rows, resultCT.rows);
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