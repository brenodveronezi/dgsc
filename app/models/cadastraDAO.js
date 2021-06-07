function cadastraDAO(connection){
	this._connection = connection;
}

cadastraDAO.prototype.insertUsuarios = function(dados, req, res){



	var pass = Math.random().toString(36).substr(2, 8);

	const suspeito = {
		text:'INSERT INTO suspeitos(nome,apelido,cpf,rg,dt_nascimento,nome_pai,nome_mae, naturalidade) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
		values: [dados.nome, dados.apelido, dados.cpf, dados.rg, dados.dt_nascimento, dados.nome_pai, dados.nome_mae, dados.naturalidade],
	}

	const caracteristicas_suspeito = {
		text: 'INSERT INTO caracteristicas_suspeito(id_suspeito,estado_civil,cor_pele,cor_olhos,tipo_cabelo,cor_cabelo,peso,altura) VALUES ((SELECT MAX(id) FROM suspeitos),$1, $2, $3, $4, $5, $6, $7)',
		values: [dados.civil, dados.corpele, dados.corolhos, dados.tipocabelo, dados.corcabelo, dados.peso, dados.altura],
	}

	const endereco1 = {
		text: 'INSERT INTO enderecos_suspeito(id_suspeito,id_end,rua,cidade,estado,numero,complemento) VALUES ((SELECT MAX(id) FROM suspeitos), $1, $2, $3, $4, $5, $6)',
		values: [1, dados.rua1,dados.cidade1, dados.estado1, dados.numero1, dados.complemento1],
	}

	const endereco2 = {
		text: 'INSERT INTO enderecos_suspeito(id_suspeito,id_end,rua,cidade,estado,numero,complemento) VALUES ((SELECT MAX(id) FROM suspeitos), $1, $2, $3, $4, $5, $6)',
		values: [2, dados.rua2,dados.cidade2, dados.estado2, dados.numero2, dados.complemento2],
	}

	const endereco3 = {
		text: 'INSERT INTO enderecos_suspeito(id_suspeito,id_end,rua,cidade,estado,numero,complemento) VALUES ((SELECT MAX(id) FROM suspeitos), $1, $2, $3, $4, $5, $6)',
		values: [3, dados.rua3, dados.cidade3, dados.estado3, dados.numero3, dados.complemento3],
	}

	const endereco4 = {
		text: 'INSERT INTO enderecos_suspeito(id_suspeito,id_end,rua,cidade,estado,numero,complemento) VALUES ((SELECT MAX(id) FROM suspeitos), $1, $2, $3, $4, $5, $6)',
		values: [4, dados.rua4, dados.cidade4, dados.estado4, dados.numero4, dados.complemento4],
	}


		this._connection.connect((err, client, release) => {
			if(err){
				return console.log('Erro ao conectar-se no BD')
			}

			client.query(suspeito, (err, result)=>{
				//release();
				if(err){
					return console.log('Erro ao inserir no BD', err)
				}else{
					client.query(caracteristicas_suspeito, (err, result)=>{
						//release();
						if(err){
							return console.log('Erro ao inserir no BD', err)
						}else{
							client.query(endereco1, (err, result)=>{
								//release();
								if(err){
									return console.log('Erro ao inserir no BD', err)
								}else{
									client.query(endereco2, (err, result)=>{
										//release();
										if(err){
											return console.log('Erro ao inserir no BD', err)
										}else{
											client.query(endereco3, (err, result)=>{
												//release();
												if(err){
													return console.log('Erro ao inserir no BD', err)
												}else{
													client.query(endereco4, (err, result)=>{
														//release();
														if(err){
															return console.log('Erro ao inserir no BD', err)
														}else{
															console.log('Usuário inserido!')
															res.render('index');
															
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
	return cadastraDAO;
}