
//Crear usuario en registro
const create = ({ nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento }) => {
    return db.query('INSERT INTO escuelabeta_definitivo.usuarios (nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento]
    );
}

//Busco usuario por email
const getByEmail = (email) => {
    return db.query('SELECT * FROM escuelabeta_definitivo.usuarios where usuarios.email = ?',
        [email]
    );
}

module.exports = {
    create,
    getByEmail
};
/*
nombre varchar(100) 
apellidos varchar(100) 
dni varchar(9) 
email varchar(60) 
password varchar(255) 
rol enum('tutor', 'profesor', 'alumno', 'director') 
genero enum('f', 'm') 
direccion tinytext
nacimiento*/