function consultaPersonalizadaDAO(connection){
	this._connection = connection;
}

consultaPersonalizadaDAO.prototype.consultaPersonalizadaSuspeito = function(dados, req, res){

    const id_suspeitos = {
        //rowMode: 'array',
        text: 'SELECT s.id,s.nome,s.cpf,c. ' + dados.local_tatuagem + ' FROM suspeitos s, caracteristicas_tatuagem c WHERE s.id = c.id_suspeito AND c.' + dados.local_tatuagem + ' LIKE $1',
        values: ['%' + dados.descricaoTatuagem + '%'],
    }

        console.log(dados);

        var consulta = [];
        Object.entries(dados).forEach(([key, value]) => {
            if(value == 'on'){
                consulta.push(key);
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
        //console.log(consultaTatuagem);
        //console.log('SELECT id_suspeito FROM tatuagem_local WHERE ' + consultaTatuagem)
        //consultaTatuagem = 'SELECT id_suspeito FROM tatuagem_local WHERE ' + consultaTatuagem;
        consultaTatuagem = 'SELECT s.id,s.nome,s.cpf FROM suspeitos s, tatuagem_local t WHERE s.id = t.id_suspeito AND ' + consultaTatuagem;

        console.log(consultaTatuagem);

        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Não conseguiu conectar-se ao BD:', err)
            }
            client.query(consultaTatuagem, (err, result) => {
                if(err){
                    return console.log('Não conseguiu realizar consulta no banco:', err)
                }
                console.log(result.rows);
                res.render('consultaPersonalizada', {suspeito: result.rows, localTatuagem: {}, descricaoTatuagem: {}, ckrosto: dados.ckrosto, ckcostas_d : dados.ckcostas_d, ckpeito_d : dados.ckpeito_d, ckbarriga_d : dados.ckbarriga_d})
            })
        })
        /*
        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Não conseguiu conectar-se ao BD:', err);
            }
            client.query(id_suspeitos, (err, result) => {
                if(err){
                    return console.log('Não conseguiu realizar consulta no banco:', err)
                }
                console.log(result.rows);
                res.render('consultaPersonalizada', {suspeito: result.rows, localTatuagem: dados.local_tatuagem, descricaoTatuagem : dados.descricaoTatuagem});
                */
                /*
               for(i = 0; result.rows.length > i; i++){
                    console.log(result.rows[i][0]);
                    if(i == result.rows.length - 1){
                        var id_suspeitos = id_suspeitos + result.rows[i][0];
                    }else{
                        var id_suspeitos = id_suspeitos + result.rows[i][0]+ ",";
                    }
                }
                */
                
                /*
                const suspeitos = {
                    rowMode: 'array',
                    //text: 'SELECT * FROM suspeitos WHERE id = ANY($1::int[])',
                    text: 'SELECT s.id,s.nome,s.cpf,t.ckrosto,t.ckcostas_d,t.ckpeito_d,t.ckbarriga_d,t.ckperna_d,t.ckperna_d,t.ckpe_d,t.ckbraco_d,t.ckantebraco_d,t.ckmao_d,t.ckpescoco_d,t.ckcostas_e,t.ckpeito_e,t.ckbarriga_e,t.ckperna_e,t.ckpe_e,t.ckbraco_e,t.ckantebraco_e,t.ckmao_e,t.ckpescoco_e,t.ckcicatriz,t.ckdeformidade FROM suspeitos s, tatuagem_local t ORDER BY s.nome ASC;'
                    //values: [id_suspeitos]
                }

                client.query(suspeitos, (err, resultSuspeitos) => {
                    if(err){
                        return console.log('Não conseguiu realizar consulta dos suspeitos:', err)
                    }
                    console.log(resultSuspeitos.rows);
                })
                
            })
        })
        */
    }

module.exports = function(){
    return consultaPersonalizadaDAO;
}