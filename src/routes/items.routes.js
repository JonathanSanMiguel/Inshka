import { Router } from 'express';
import { getItems, getOneItem, createItem, upDateItem, deleteItem } from '../controllers/items.controller.js';

const router = Router();
//Rutas para las consultas.
//Ruta para taer todos los items.
router.get('/Items', getItems);
//Ruta para obtener un item.
router.get('/OneItem/:id', getOneItem);
//Ruta para crear un nuevo item.
router.post('/create', createItem);
//Ruta para actualizar un item.
router.put('/upDate/:id', upDateItem);
//Ruta para eliminar un item.
router.delete('/delete/:id', deleteItem);

export default router;