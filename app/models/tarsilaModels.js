module.exports = {
    getPaintings: (dbConn, callback) => {
        console.log('{Model} Função que fará a leitura de todas as obras no banco de dados');
        const sql = 'select * from obrasdearte where artista = \'Tarsila do Amaral\';';
        dbConn.query(sql, callback);
        //callback(sql, callback);
    }
}