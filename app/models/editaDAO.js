function editaDAO(connection){
    this._connection = connection;
}


editaDAO.prototype.editaPessoais = function(dados, req, res){

    console.log('NO editaDAO!!!!!!!!');

    const editaPessoais = {
        text: 'UPDATE suspeitos SET nome = $1 WHERE id = $2',
        values:[dados.nome, dados.id]
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

module.exports = editaDAO();