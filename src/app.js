import express from 'express';
import morgan from 'morgan';
import itemsRoutes from './routes/items.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

//MiddleWares
app.use(morgan("dev"));
app.use(express.json());
// Configurar Headers y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Importacion de las rutas
app.use(indexRoutes);
app.use('/inshka', itemsRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        Message: 'EndPoint Not Found.'
    });
});

export default app;