import { pool } from '../db.js';

export const getItems = (req, res) => res.send("obteniendo los items");

export const getOneItem = (req, res) => res.send("obteniendo un item");

export const createItem = async(req, res) => {
    const { nombre, descripcion, peso, marca, estado, cantidad } = req.body
    const [rows] = await pool.query(
        'INSERT INTO item (nombre, descripcion, peso, marca, estado, cantidad) VALUES(?, ?, ?, ?, ?, ?)', [nombre, descripcion, peso, marca, estado, cantidad]);
    console.log({ rows });
};

export const upDateItem = (req, res) => res.send("Actualizando item");

export const deleteItem = (req, res) => res.send("Borrando item");