import { User } from "../../db.mjs";

//Controlador para obtener todos los favoritos de cierto usuario
const getChar = async (idUser) => {

    const user = await User.findByPk(idUser);

    const characters = await user.getCharacters();

    return characters;

};

export default getChar;