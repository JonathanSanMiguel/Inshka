CREATE DATABASE IF NOT EXISTS inshka;
USE inshka;

CREATE TABLE marcas (
	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NombreMarca varchar(25) NOT NULL
);

CREATE TABLE productos (
	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(35) NOT NULL,
    Descripcion VARCHAR(100) NOT NULL ,
    Peso INT NOT NULL,
	MarcaId INT NOT NULL,
    Estado VARCHAR(50) NOT NULL,
    Cantidad INT NOT NULL,
    FOREIGN KEY (MarcaId) REFERENCES marcas(Id)
);

DESCRIBE productos;


INSERT INTO marcas VALUES
(1, 'Trupper'),
(2, 'Black&Decker'),
(3, 'Lows'),
(4, 'GeatValue'),
(5, 'HomeDepot'),
(6, 'Soriana');


INSERT INTO productos VALUES
(1, 'Martillo', 'Metal y mango de madera', 550, 1, 'nuevo', 100),
(2, 'Pinzas', 'Plastico y metal de 15cm de diametro', 180, 6, 'usado', 50),
(3, 'Desarmador', 'Estrella de 2cm espesor', 20, 5, 'nuevo', 400),
(4, 'Cable electrico', 'Rollo de 10 metros de 2 fibras', 3000, 4, 'nuevo', 10),
(5, 'Cinta aislante', 'Paquete de 15 cintas de 5 metros c/u', 700, 3, 'nuevo', 40),
(6, 'Mutimetro', 'Profesional de 31 lecturas', 260, 2, 'usado', 15);
