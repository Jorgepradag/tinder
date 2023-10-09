import {Sequelize} from 'sequelize';

const conexion = new Sequelize(
    'Tinder', //Nombre de la base
    'postgres', //Usuario
    '1968', // Password
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

export default conexion;