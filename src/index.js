import express from 'express';
import router  from './routes/routes.js';
import cors from 'cors';
const app = express();
const PUERTO = 4000;

app.use(router);
app.use(cors());
app.listen(PUERTO, console.log(`Escuchando por el puerto ${PUERTO}`));