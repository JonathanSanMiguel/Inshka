import express from 'express';
import morgan from 'morgan';
import itemsRoutes from './routes/items.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

//MiddleWares
app.use(morgan("dev"));
app.use(express.json());

//Importacion de las rutas
app.use(indexRoutes);
app.use('/inshka', itemsRoutes);

//Inizializacion del puerto
app.listen(5000);
console.log("Servidor en el puerto 5000");