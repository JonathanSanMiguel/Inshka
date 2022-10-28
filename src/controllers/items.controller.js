import { pool } from '../db.js';

//obtener todos los items.
export const getItems = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM item');
    res.json(rows);
};

//Obtener un item.
export const getOneItem = async(req, res) => {
    const [rows] = await pool.query(
        'SELECT * FROM item WHERE id = ?', [req.params.id]
    );
    //Si se busca un id inexistente mandara 404
    if (rows.length <= 0) return res.status(404).json({
        message: 'Item not found'
    });
    res.json(rows[0]);
};

//Crear un nuevo item.
export const createItem = async(req, res) => {
    const { nombre, descripcion, peso, marca, estado, cantidad } = req.body;
    await pool.query(
        'INSERT INTO item (nombre, descripcion, peso, marca, estado, cantidad) VALUES(?, ?, ?, ?, ?, ?)', [nombre, descripcion, peso, marca, estado, cantidad]
    );
};

//Actualizar un item.
export const upDateItem = (req, res) => res.send("Actualizando item");

//Borrar un item.
export const deleteItem = async(req, res) => {
    const result = await pool.query(
        'DELETE FROM item WHERE id = ?' [req.params.id]
    );
    res.json(rows);
};