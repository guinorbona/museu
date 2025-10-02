const { getPaintings, savePainting } = require("../controllers/homeController");

module.exports = {
    getPaintings: (dbConn, callback) => {
        console.log('{Model} Função que fará a leitura de todas as obras no banco de dados');
        const sql = 'select * from obrasdearte;';
        const sqlComent = 'select comentario from comentarios where id == idobra.comentarios;'
        dbConn.query(sql, sqlComent, callback);
        //callback(sql, callback);
    },
    savePainting: (dbConn, paintings, callback) => {
        const sql = 'insert into obrasdearte (nome, artista, ano, urlimagem) values (?,?,?,?)'
        dbConn.query(sql, [paintings.nome, paintings.artista, paintings.ano, paintings.urlimagem], callback);
    }
}