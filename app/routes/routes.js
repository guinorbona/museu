const Joi = require('joi');

const {home} = require('../controllers/homeController')
const {tarsila} = require('../controllers/tarsilaController')
const {portinari} = require('../controllers/portinariController')
const {comentario} = require('../controllers/comentController')
const {savePainting} = require('../controllers/homeController')

const schema = Joi.object({
    nome: Joi.string().min(5).max(100).required(),
    ano: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
    artista: Joi.string().min(5).max(100).required(),  
    urlImagem: Joi.string().uri().required()
});

const validatePaining = (req, res, next) => {
    const {error} = schema.validate(req.body);
    if(error){
        return res.render('insertPainting.ejs', {errors: error.details, paintings: req.body});
    }
    next();
}

module.exports = {
    /*home: (app) => {
        app.get('/', (req, res) => {
            res.render('home.ejs');
        });
    },*/
    home: (app) => {
        app.get('/', (req, res) => {
            console.log('Cheguei no rota /');
            home(app, req, res);
        });
    },
    tarsila: (app) => {
        app.get('/tarsila', (req, res) => {
            console.log('Cheguei no rota /')
            tarsila(app, req, res);
        });
    },
    portinari: (app) => {
        app.get('/portinari', (req, res) => {
            console.log('Cheguei no rota /')
            portinari(app, req, res);
        });
    },
    comentario: (app) => {
        app.post('/comentario', (req, res) => {
            console.log('Cheguei no rota / comenario');
            comentario(app, req, res);
        });
    },
    insertPainting: (app) => {
        app.get('/inserirobra', (req, res) => {
            console.log('Cheguei no rota / comenario');
            res.render('insertPainting.ejs', errors);
        });
    },
    savePainting: (app) => {
        //receber os dados
        // validar os dados
        // gravar os dados 
        // enviar um feedback sobre os dados
        app.post('/obra/salvar', validatePaining, (req, res) => {
            console.log('Cheguei no rota / savePainting');
            savePainting(app, req, res);
        });
    },
    error: (app) => {
        app.use((req, res) => {
            res.status(404);
            res.render('naoencontrado.ejs', { errors: [], paintings: {} });
        });
    }
}
