function consultaPersonalizadaDAO(connection){
	this._connection = connection;
}

consultaPersonalizadaDAO.prototype.consultaPersonalizadaSuspeito = function(dados, req, res){

    const id_suspeitos = {
        rowMode: 'array',
        text: 'SELECT id_suspeito FROM tatuagem_local WHERE ckrosto = $1',
        values: [1],
        types: {
            getTypeParser: () => val => val,
          }
    
    }


        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Não conseguiu conectar-se ao BD:', err);
            }
            client.query(id_suspeitos, (err, result) => {
                if(err){
                    return console.log('Não conseguiu realizar consulta no banco:', err)
                }
                console.log(result.rows);
                var id_suspeitos = result.rows;
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
                console.log(id_suspeitos)

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
    }

module.exports = function(){
    return consultaPersonalizadaDAO;
}