import { Router } from 'express';
import { getItems, getOneItem, createItem, upDateItem, deleteItem } from '../controllers/items.controller.js';

const router = Router();
//Rutas para las consultas.
//Ruta para taer todos los items.
router.get('/Items', getItems);
//Ruta para obtener un item.
router.get('/OneItem', getOneItem);
//Ruta para crear un nuevo item.
router.post('/Items', createItem);
//Ruta para actualizar un item.
router.put('/Items', upDateItem);
//Ruta para eliminar un item.
router.delete('/Items', deleteItem);

export default router;