module.exports = function(application){

    application.get('/cadastro', (req, res) => {
        application.app.controllers.cadastro.user(application, req, res);
    })

    application.post('/cadastro/salvar', (req, res) => {
        application.app.controllers.cadastro.cadastra_user(application, req, res);
    })

    application.get('/consulta', (req, res) => {
        application.app.controllers.consulta.consultaSuspeitos(application, req, res);
    })

    application.post('/edita', (req, res) => {
        application.app.controllers.consulta.cadastroSuspeito(application, req, res);
    })
    
    application.post('/editaPessoais', (req, res) => {
        application.app.controllers.edita.editaSuspeitoPessoais(application, req, res);
    })

    application.post('/editaCaracteristicas', (req, res) => {
        application.app.controllers.edita.editaCaracteristicas(application, req, res);
    })

    application.post('/editaEndereco1', (req, res) => {
        application.app.controllers.edita.editaEndereco1(application, req, res);
    })

    application.post('/editaEndereco2', (req, res) => {
        application.app.controllers.edita.editaEndereco2(application, req, res);
    })

    application.post('/editaEndereco3', (req, res) => {
        application.app.controllers.edita.editaEndereco3(application, req, res);
    })

    application.post('/editaEndereco4', (req, res) => {
        application.app.controllers.edita.editaEndereco4(application, req, res);
    })
    
    application.post('/editaPassagem1', (req, res) => {
        application.app.controllers.edita.editaPassagem1(application, req, res);
    })

    application.post('/editaPassagem2', (req, res) => {
        application.app.controllers.edita.editaPassagem1(application, req, res);
    })

    application.post('/editaPassagem3', (req, res) => {
        application.app.controllers.edita.editaPassagem1(application, req, res);
    })

    application.post('/editaPassagem4', (req, res) => {
        application.app.controllers.edita.editaPassagem1(application, req, res);
    })

    application.post('/consultaPersonalizada', (req, res) => {
        application.app.controllers.consulta.consultaPersonalizada(application, req, res);
    })




    application.get('/pdf', (req, res) => {
        res.render('pdf')
    })

    
    application.get('/', (req, res) => {
        res.render('index');
    })

    application.post('/uploads', (req,res) =>{
        res.send('ok');
    })
}