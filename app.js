
//Variables de entorno
require('dotenv').config();

//Paqueterias
const Server = require('./models/server');


//variables

const server = new Server();

//codigo

server.listen();
