CREATE DATABASE IF NOT EXISTS almazondb;
USE almazondb;

CREATE TABLE item(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(35) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    peso INT(20) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    estado varchar(30) NOT NULL,
    cantidad INT(10) NOT NULL
);
DESCRIBE item;

INSERT INTO item VALUES
(1, 'Martillo', 'Metal y mango de madera', 550, 'Trupper', 'nuevo', 100),
(2, 'Pinzas', 'Plastico y metal de 15cm de diametro', 180, 'Black&Decker', 'usado', 50),
(3, 'Desarmador', 'Estrella de 2cm espesor', 20, 'Lows', 'nuevo', 400),
(4, 'Cable electrico', 'Rollo de 10 metros de 2 fibras ', 3000, 'GeatValue', 'nuevo', 10),
(5, 'Cinta aislante', 'Paquete de 15 cintas de 5 metros c/u', 700, 'HomeDepot', 'nuevo', 40),
(6, 'Mutimetro', 'Profesional de 31 lecturas', 260, 'Soriana', 'usado', 15);