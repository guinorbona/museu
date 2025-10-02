const dbConnection = require('../../config/dbConnection');
const { getPaintings } = require('../models/tarsilaModels');

module.exports.tarsila = (app, req, res) => {
    console.log('Controller da tarsila');

    // chamada para o model
    const dbConn = dbConnection();
    getPaintings(dbConn, (error, result) => {
        console.log(error);
        console.log(result);
        res.render('tarsila.ejs', { paintings: result });
    });
}