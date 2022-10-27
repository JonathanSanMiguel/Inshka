import { pool } from '../db.js';

//obtener todos los items.
export const getItems = (req, res) => res.send("obteniendo los items");

//Obtener un item.
export const getOneItem = (req, res) => res.send("obteniendo un item");

//Crear un nuevo item.
export const createItem = async(req, res) => {
    const { nombre, descripcion, peso, marca, estado, cantidad } = req.body;
    await pool.query('INSERT INTO item (nombre, descripcion, peso, marca, estado, cantidad) VALUES(?, ?, ?, ?, ?, ?)', [nombre, descripcion, peso, marca, estado, cantidad]);
};

export const upDateItem = (req, res) => res.send("Actualizando item");

export const deleteItem = (req, res) => res.send("Borrando item");