USE a21xavcabmil_proyecto;

Create table Persona (
	idUsu int NOT NULL AUTO_INCREMENT,
    nickname varchar(20),
    email varchar(50),
    passw varchar (20),
    PRIMARY KEY (idUsu)
);

Create table User (
	idUsu int Primary key,
    menedero int,
    FOREIGN KEY (idUsu) REFERENCES Persona(idUsu)
    On delete cascade
    
);

Create table Admin (
	idUsu int Primary key,
    FOREIGN KEY (idUsu) REFERENCES Persona(idUsu)
    On delete cascade
    
);

Create table Mensaje (
	codMen int Primary key,
    descripcion varchar(50),
    idUsu int,
    FOREIGN KEY (idUsu) REFERENCES Persona(idUsu)
    On delete cascade
    
);

Create table Producto (
	idProd int Primary key,
    nombre int,
    precio int,
    descripcion varchar(50),
    idUsu int,
    FOREIGN KEY (idUsu) REFERENCES Persona(idUsu)
    On delete cascade
    
);

Create table Valorar (
	codValo int Primary key,
    descripcion varchar(50),
    idUsu int,
    FOREIGN KEY (idUsu) REFERENCES Persona(idUsu)
    On delete cascade
    
);