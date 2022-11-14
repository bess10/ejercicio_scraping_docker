//importamos los modulos necesarios
const express = require('express');
const router = require('./routes/routes.js');
const cors = require('cors');
const {join} = require('node:path');

const app = express();
const PUERTO = 4000;

app.use(cors());
app.use(express.static(join(__dirname, 'public')));
app.use(router);
//asignamos el puerto 
app.listen(PUERTO, console.log(`Escuchando por el puerto ${PUERTO}`));