function cadastraDAO(connection){
	this._connection = connection;
}

cadastraDAO.prototype.insertUsuarios = function(dados, req, res){
	
	const suspeito = {
		text:'INSERT INTO suspeitos(nome,apelido,cpf,rg,dt_nascimento,nome_pai,nome_mae, naturalidade) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
		values: [dados.nome, dados.apelido, dados.cpf, dados.rg, dados.dt_nascimento, dados.nome_pai, dados.nome_mae, dados.naturalidade],
	}

	
	const caracteristicas_suspeito = {
		text: 'INSERT INTO caracteristicas_suspeito(id_suspeito,estado_civil,cor_pele,cor_olhos,tipo_cabelo,cor_cabelo,peso,altura) VALUES ((SELECT MAX(id) FROM suspeitos),$1, $2, $3, $4, $5, $6, $7)',
		values: [dados.civil, dados.corpele, dados.corolhos, dados.tipocabelo, dados.corcabelo, dados.peso, dados.altura],
	}


	this._connection.connect((err, client, release) => {
		if(err){
			return console.log('Erro ao conectar-se no BD:', err)
		}

		client.query(suspeito, (err, result) => {
			release();
			if(err){
				return console.log('Erro ao inserir suspeito no BD:', err);
			}else{
				client.query(caracteristicas_suspeito, (err, result) => {
					if(err){
						return console.log('Erro ao inserir caracteristicas_suspeito no BD:', err)
					}
				})
			}
		})
	})

	

	Object.entries(dados).forEach(([key, value]) => {
		if(key == 'on'){
			const tattoos = {
				text: 'INSERT INTO tatuagem_local(id_suspeito,' + key + ') VALUES ((SELECT MAX(id) FROM suspeitos), $1) ON CONFLICT (id_suspeito) DO UPDATE SET ' + key + '= $1',
				values: [1],
			}
			
			this._connection.connect((err, client, release) => {
				if(err){
					return console.log('Não conseguiu se conectar no BD:', err);
				}
				client.query(tattoos, (err, resultTattoos) => {
					release();
					if(err){
						return console.log('Não conseguiu inserir no BD tattoos:', err);
					}
				})
			})
		}

		if( key.match(/rua.*/) || key.match(/cidade.*/) || key.match(/estado.*/) || key.match(/numero.*/) || key.match(/complemento.*/)){
			const enderecos = {
				text: 'INSERT INTO enderecos_suspeito(id_suspeito,' + key + ') VALUES ((SELECT MAX(id) FROM suspeitos), $1) ON CONFLICT (id_suspeito) DO UPDATE SET ' + key + '= $1',
				values:[value],
			}

			this._connection.connect((err, client, release) => {
				if(err){
					return console.log('Erro ao conectar-se no BD:', err);
				}
				client.query(enderecos, (err, resultEnderecos) => {
					release();
					if(err){
						return console.log('Erro ao inserir no BD, enderecos:', err);
					}
				})
			})
		}

		if(key.match(/txt.*/) ){
			const caracteristicas_tatuagem = {
				text: 'INSERT INTO caracteristicas_tatuagem(id_suspeito,' + key + ') VALUES ((SELECT MAX(id) FROM suspeitos), $1) ON CONFLICT (id_suspeito) DO UPDATE SET ' + key + '= $1',
				values:[value],
			}

			this._connection.connect((err, client, release) => {
				if(err){
					return console.log('Erro ao conectar-se no BD:', err);
				}
				client.query(caracteristicas_tatuagem, (err, resultTatuagens) => {
					release();
					if(err){
						return console.log('Erro ao inserir no BD, tatuagens:', err);
					}
				})
			})
		}

		if(key.match(/data.*/) || key.match(/procedimento.*/) || key.match(/artigo.*/) || key.match(/lei.*/) || key.match(/historico.*/) ){
			const passagens_suspeito = {
				text: 'INSERT INTO passagens_suspeito(id_suspeito,' + key + ') VALUES ((SELECT MAX(id) FROM suspeitos), $1) ON CONFLICT (id_suspeito) DO UPDATE SET ' + key + '= $1',
				values:[value],
			}

			this._connection.connect((err, client, release) => {
				if(err){
					return console.log('Erro ao conectar-se no BD:', err);
				}
				client.query(passagens_suspeito, (err, resultPassagens) => {
					release();
					if(err){
						return console.log('Erro ao inserir no BD, passagens:', err);
					}
				})
			})
		}


	})
}

module.exports = function(){
	return cadastraDAO;
}