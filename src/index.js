import app from './app.js';
import { PORT } from './config.js';

//Inizializacion del puerto
app.listen(PORT, () => {
    console.log("Servidor en el puerto", PORT);
});