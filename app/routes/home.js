module.exports = function(application, req, res){

    application.get('/cadastro', (req, res) => {
        application.app.controllers.cadastro.user(application, req, res);
    })

    application.post('/cadastro/salvar', (req, res) => {
        application.app.controllers.cadastro.cadastra_user(application, req, res);
    })

    application.get('/consulta', (req, res) => {
        application.app.controllers.consulta.consultaSuspeitos(application, req, res);
    })

    application.post('/cadastro', (req, res) => {
        application.app.controllers.consulta.cadastroSuspeito(application, req, res);
    })

    
    application.get('/', (req, res) => {
        res.render('index');
    })

    application.post('/uploads', (req,res) =>{
        //
        res.send('ok');
    })
}