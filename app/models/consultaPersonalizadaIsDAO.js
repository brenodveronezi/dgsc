function consultaPersonalizadaIsDAO(connection){
	this._connection = connection;
}

consultaPersonalizadaIsDAO.prototype.consultaPersonalizadaIs = function(dados, req, res){

    const id_suspeitos = {
        //rowMode: 'array',
        //text: 'SELECT s.id,s.nome,s.cpf,c. ' + dados.local_tatuagem + ' FROM suspeitos s, caracteristicas_tatuagem c WHERE s.id = c.id_suspeito AND c.' + dados.local_tatuagem + ' LIKE $1',
        text: 'SELECT suspeitos.id, suspeitos.nome, suspeitos.cpf,suspeitos.apelido,TO_CHAR(suspeitos.dt_nascimento, \'DD/MM/YYYY\') dt_nascimento,fotos_suspeito.foto_principal,caracteristicas_tatuagem. ' + dados.local_tatuagem + ' FROM suspeitos INNER JOIN fotos_suspeito ON fotos_suspeito.id_suspeito = suspeitos.id INNER JOIN caracteristicas_tatuagem ON caracteristicas_tatuagem.id_suspeito = suspeitos.id WHERE caracteristicas_tatuagem.' + dados.local_tatuagem + ' LIKE $1',
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
        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Não conseguiu conectar-se ao BD:', err)
            }
            client.query(id_suspeitos, (err, result) => {
                if(err){
                    return console.log('Não conseguiu realizar consulta no banco:', err)
                }
                console.log(result.rows);
                //res.render('consultaPersonalizada', {suspeito: result.rows, localTatuagem: {}, descricaoTatuagem: {}, ckrosto: dados.ckrosto, ckcostas_d : dados.ckcostas_d, ckpeito_d : dados.ckpeito_d, ckbarriga_d : dados.ckbarriga_d})
                res.render('identificarSuspeitos', {suspeito: result.rows, params: {}});
            })
        })
    }

module.exports = function(){
    return consultaPersonalizadaIsDAO;
}