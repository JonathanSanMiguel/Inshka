import { pool } from '../db.js';


//obtener todos los items.
export const getItems = async(req, res) => {
    try {
        //throw new Error('DB error');
        const [rows] = await pool.query('SELECT * FROM productos');

        res.status(200).json(
            rows
        );
    } catch (error) {
        //Si falla la peticion regresa estado 500.
        return res.status(500).json({
            Message: 'Something Goes Wrong.'
        }); //return
    } //catch
}; //getItems


//Obtener un item.
export const getOneItem = async(req, res) => {
    try {
        const [row] = await pool.query(
            'SELECT * FROM productos WHERE id = ?', [req.params.id]
        );
        //Si se busca un id inexistente mandara 404
        if (row.length <= 0) return res.status(404).json({
            message: 'Item not found'
        });

        //Toma el valor del arreglo.
        res.status(200).json(row[0]);

    } catch (error) {
        return res.status(500).json({
            Message: 'Something Goes Wrong.'
        }); //return
    } //catch
}; //getOneItem


//Crear un nuevo item.
export const createItem = async(req, res) => {
    try {

        const { nombre, descripcion, peso, marca, estado, cantidad } = req.body;

        console.log(nombre, descripcion, peso, marca, estado, cantidad)

        await pool.query(
            'INSERT INTO productos (Nombre, Descripcion, Peso, MarcaId, Estado, Cantidad) VALUES(?, ?, ?, ?, ?, ?)', [nombre, descripcion, peso, marca, estado, cantidad]
        );

        res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({
            Message: 'Something Goes Wrong'
        }); //return
    } //catch
}; //createItem


//Actualizar un item.
export const upDateItem = async(req, res) => {

    const { id } = req.params;

    const { nombre, descripcion, peso, marca, estado, cantidad } = req.body;
    
    try {
        await pool.query(
            'UPDATE item SET nombre = ?, descripcion = ?, peso = ?, marca = ?, estado = ?, cantidad = ? WHERE id = ?', [nombre, descripcion, peso, marca, estado, cantidad, id]
        );
        res.sendStatus(204);
    } catch (error) {
        return res.status().json({
            Message: 'Something Goes Wrong'
        }); //return
    } //catch
}; //upDateItem


//Borrar un item.
export const deleteItem = async(req, res) => {
    try {
        const [result] = await pool.query(
            'DELETE FROM item WHERE id = ?', [req.params.id]
        );
        //Si se intenta eliminar un item inexistente mandara 404.
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Item not found'
        });
        //204 es positivo pero sin respons.
        res.sendStatus(204);
    } catch (error) {
        //Si falla la peticion mandara error 500.
        return res.status().json({
            Message: 'Something Goes Wrong'
        }); //return
    } //catch
}; //deleteItem