function consultaPersonalizadaDAO(connection){
	this._connection = connection;
}

consultaPersonalizadaDAO.prototype.consultaPersonalizadaSuspeito = function(dados, req, res){

    //if(dados.local_tatuagem != 'nenhum' && dados.idade != 'nenhum' && dados.altura != 'nenhum' && dados.cor_pele != 'nenhum' && dados.cor_olhos != 'nenhum' && dados.tipo_cabelo != 'nenhum' && dados.cor_cabelo != 'nenhum'){

        var idade = dados.idade;
        var altura = dados.altura;
        var cor_pele = dados.cor_pele;
        var cor_olhos = dados.cor_olhos;
        var tipo_cabelo = dados.tipo_cabelo;
        var cor_cabelo = dados.cor_cabelo;
        var local_tatuagem = dados.local_tatuagem;
        var descricao_tatuagem = dados.descricaoTatuagem;

        if(idade == 'nenhum'){
            var idade1 = '0';
            var idade2 = '100';
        }else{
            var idade1 = idade.slice(0, 2);
            var idade2 = idade.slice(3,5);
        }
        console.log(idade1, idade2)

        if(altura == 'nenhum'){
            var altura1 = 0;
            var altura2 = 220;
        }else{
            var altura1 = altura.slice(0,3);
            var altura2 = altura.slice(4,7);
        }
        console.log(altura1, altura2)

        if(cor_pele == 'nenhum'){
            var cor_pele = "'Amarelo','Branco','Pardo','Negro','Vermelho'";
        }else{
            var cor_pele = "'" + dados.cor_pele + "'";
        }
        console.log(cor_pele);
        
        if(cor_olhos == 'nenhum'){
            var cor_olhos = "'Azul','Verde','Castanho','Preto'";
        }else{
            var cor_olhos = "'" + dados.cor_olhos + "'";
        }
        console.log(cor_olhos);

        if(tipo_cabelo == 'nenhum'){
            var tipo_cabelo = "'Calvo','Ondulado','Encaracolado','Liso','Carapinha'";
        }else{
            var tipo_cabelo = "'" + dados.tipo_cabelo + "'";
        }
        console.log(tipo_cabelo);

        if(cor_cabelo == 'nenhum'){
            var cor_cabelo = "'Ruivo','Loiro','Castanho','Preto','Grisalio'";
        }else{
            var cor_cabelo = "'" + dados.cor_cabelo + "'";
        }
        console.log(cor_cabelo);

        if(local_tatuagem == 'nenhum' && descricao_tatuagem == ''){
            var text = `
            SELECT 
                suspeitos.id, suspeitos.nome, suspeitos.cpf,suspeitos.apelido,TO_CHAR(suspeitos.dt_nascimento, \'DD/MM/YYYY\') dt_nascimento,
                fotos_suspeito.foto_principal
            FROM 
                suspeitos
            INNER JOIN fotos_suspeito ON fotos_suspeito.id_suspeito = suspeitos.id
            INNER JOIN caracteristicas_tatuagem ON caracteristicas_tatuagem.id_suspeito = suspeitos.id
            INNER JOIN caracteristicas_suspeito ON caracteristicas_suspeito.id_suspeito = suspeitos.id
            WHERE 
                suspeitos.idade >= $1 AND suspeitos.idade <= $2
            
            AND
                caracteristicas_suspeito.cor_pele IN( ` + cor_pele + `)
            AND
                caracteristicas_suspeito.altura  >= $3 AND caracteristicas_suspeito.altura <= $4
            AND 
                caracteristicas_suspeito.cor_olhos IN( ` + cor_olhos + `)
            AND 
                caracteristicas_suspeito.tipo_cabelo IN( ` + tipo_cabelo + `)
            AND
                caracteristicas_suspeito.cor_cabelo IN( ` + cor_cabelo + `)
    
          `;
    
          var values = [idade1, idade2, altura1, altura2];
        }else{
            var text = `
            SELECT 
                suspeitos.id, suspeitos.nome, suspeitos.cpf,suspeitos.apelido,TO_CHAR(suspeitos.dt_nascimento, \'DD/MM/YYYY\') dt_nascimento,
                fotos_suspeito.foto_principal,caracteristicas_tatuagem. ` + local_tatuagem + `
            FROM 
                suspeitos
            INNER JOIN fotos_suspeito ON fotos_suspeito.id_suspeito = suspeitos.id
            INNER JOIN caracteristicas_tatuagem ON caracteristicas_tatuagem.id_suspeito = suspeitos.id
            INNER JOIN caracteristicas_suspeito ON caracteristicas_suspeito.id_suspeito = suspeitos.id
            WHERE 
                caracteristicas_tatuagem.` + local_tatuagem + ` LIKE $1 
            AND 
                suspeitos.idade >= $2 AND suspeitos.idade <= $3
            
            AND
                caracteristicas_suspeito.cor_pele IN( ` + cor_pele + `)
            AND
                caracteristicas_suspeito.altura  >= $4 AND caracteristicas_suspeito.altura <= $5
            AND 
                caracteristicas_suspeito.cor_olhos IN( ` + cor_olhos + `)
            AND 
                caracteristicas_suspeito.tipo_cabelo IN( ` + tipo_cabelo + `)
            AND
                caracteristicas_suspeito.cor_cabelo IN( ` + cor_cabelo + `)
    
          `;
    
          var values = ['%' + dados.descricaoTatuagem + '%', idade1, idade2, altura1, altura2];
        }
        


        this._connection.connect((err, client, release) => {
            if(err){
                return console.log('Não conseguiu conectar-se ao BD:', err)
            }
            client.query(text, values, (err, result) => {
                if(err){
                    return console.log('Não conseguiu realizar consulta no banco:', err)
                }
                console.log(result.rows);
                //res.render('consultaPersonalizada', {suspeito: result.rows, localTatuagem: {}, descricaoTatuagem: {}, ckrosto: dados.ckrosto, ckcostas_d : dados.ckcostas_d, ckpeito_d : dados.ckpeito_d, ckbarriga_d : dados.ckbarriga_d})
                res.render('consulta', {suspeito: result.rows, params: {}});
                
            })
        })
    //}
    


        console.log(dados);
/*
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
        */

    }

module.exports = function(){
    return consultaPersonalizadaDAO;
}