const dbConnection = require('../../config/dbConnection');
const { postComent } = require('../models/comentModels');

module.exports.comentario = (app, req, res) => {
    console.log('Controller da comentarios', req.body);
    console.log(req.query.idobra);

    const idObra = req.query.idobra;
    
    const comment = req.body.comentario;

    console.log('idobra: ', idObra, 'comentario: ', comment);

    const dbConn = dbConnection();
    postComent(idObra, comment, dbConn, (error, result) => {
        console.log(error);
        console.log(result);
        res.redirect('/');
        //res.render('home.ejs', { coments: result });
    });
}