/*module.exports.portinari = (app, req, res) => {
    console.log('Controller da portinari');
    res.render('portinari.ejs');
}*/

const dbConnection = require('../../config/dbConnection');
const { getPaintings } = require('../models/portinariModels');

module.exports.portinari = (app, req, res) => {
    console.log('Controller do portinari');

    // chamada para o model
    const dbConn = dbConnection();
    getPaintings(dbConn, (error, result) => {
        console.log(error);
        console.log(result);
        res.render('portinari.ejs', { paintings: result });
    });
}