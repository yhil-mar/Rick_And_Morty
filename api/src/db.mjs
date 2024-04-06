import { Sequelize } from "sequelize";

// Importación de los modelos
import CharacterModel from "./models/Character.mjs";
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

CharacterModel(sequelize);
FavoriteModel(sequelize);
UserModel(sequelize);

// Relación de modelos
const { User, Character, Favorite } = sequelize.models;
User.belongsToMany(Character, { through: 'UserCharacter' });
User.belongsToMany(Favorite, { through: 'UserFavorite' });
Character.belongsToMany(User, { through: 'UserCharacter' })
Favorite.belongsToMany(User, { through: 'UserFavorite' });

export {
    User,
    Character,
    Favorite,
    sequelize as conn
};