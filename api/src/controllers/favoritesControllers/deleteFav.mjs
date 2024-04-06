import { Favorite, User } from "../../db.mjs";

const deleteFav = async (id, idUser) => {

    const user = await User.findByPk(idUser);

    const fav = await Favorite.findByPk(id);

    if (!user) return { status: 400, message: 'ID de usuario incorrecto' };

    if (!fav) return { status: 400, message: 'El usuario no cuenta con este favorito' };

    // Aquí se elimina el favorito relacionado con el usuario logueado
    const result = await user.removeFavorite(id);

    let bandera = 0;

    // Acá se verifica si ya no hay usuarios con el favorito anteriormente eliminado
    await Favorite.findByPk(id, { include: 'Users' })

        .then(async favorites => {

            if (!favorites.Users.length) {

                // Si es así se elimina ese favorito del modelo Favorite
                await fav.destroy();

            }

            // Si se eliminó un registro cambia la bandera
            if (result) bandera = 1;

        });

    if (bandera) return { status: 201, message: 'Registro eliminado con éxito' };

    else return { status: 400, message: 'El usuario no cuenta con este favorito' };

};

export default deleteFav;