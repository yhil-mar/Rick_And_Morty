import { User } from "../../db.mjs";

//Controlador para obtener todos los favoritos de cierto usuario
const getFav = async (idUser) => {

    const user = await User.findByPk(idUser);

    const favorites = await user.getFavorites();

    return favorites;

};

export default getFav;