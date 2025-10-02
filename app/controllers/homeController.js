const dbConnection = require('../../config/dbConnection');
const { getPaintings, savePainting } = require('../models/homeModels');

module.exports.home = (app, req, res) => {
    console.log('Controller da home');

    // chamada para o model
    const dbConn = dbConnection();
    getPaintings(dbConn, (error, result) => {
        console.log(error);
        console.log(result);
        res.render('home.ejs', { paintings: result, coments: result });
    });
}

module.exports.addPainting = async (app, req, res) => {
    const dbConn = dbConnection();

    console.log('Controller da add paint');
    savePainting(dbConn, req.body, (error, result) => {
        console.log('erro', error);
        console.log('resultado', result);
        res.redirect('/');
    });
}

