import { Sequelize } from "sequelize";

// Importación de los modelos
import FavoriteModel from "./models/Favorite.mjs";
import UserModel from "./models/User.mjs";

// Importación de las variables de entorno
import dotenv from 'dotenv';
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// Creación de conexión con la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

// Creación de los modelos en la DB
FavoriteModel(sequelize);
UserModel(sequelize);

// Relación de modelos
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });

export {
    User,
    Favorite,
    sequelize as conn
};