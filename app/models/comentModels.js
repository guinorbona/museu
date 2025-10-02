module.exports = {
    postComent: (idObra, comment, dbConn, callback) => {
        console.log(idObra, comment);
        const sql = `insert into comentarios (comentario, idobra) values ('${comment}', ${idObra});`;
        dbConn.query(sql, callback);
    }
}