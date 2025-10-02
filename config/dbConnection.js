const mysql = require('mysql2');

const host = 'localhost';
const database = 'museu';
const user = 'root';
const password = 'ifsp';

/*dbConnection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

console.log('[dbConnection]', dbConnection.state);

dbConnection.connect((error) => {
    console.log('[dbConnection error]', error);
});

module.exports = dbConnection;*/

module.exports = () => {
    return dbConn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });
};