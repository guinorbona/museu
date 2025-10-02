/*const express = require('express');

const app = express();
const porta = process.env.PORT || 3000;

app.set('view enginer', 'ejs');
app.use(express.static(__dirname + '/public'));*/

const app = require('./config/server');

const routes = require('./app/routes/routes');

routes.home(app);
routes.tarsila(app);
routes.portinari(app);
routes.comentario(app);
routes.insertPainting(app);
routes.savePainting(app);