import { Character, User } from "../../db.mjs";

const deleteChar = async (id, idUser) => {

    const user = await User.findByPk(idUser);

    const char = await Character.findByPk(id);

    if (!user) return { status: 400, message: 'ID de usuario incorrecto' };

    if (!char) return { status: 400, message: 'El usuario no cuenta con este personaje' };

    // Aquí se elimina el personaje relacionado con el usuario logueado
    const result = await user.removeCharacter(id);

    let bandera = 0;

    // Acá se verifica si ya no hay usuarios con el personaje anteriormente eliminado
    await Character.findByPk(id, { include: 'Users' })

        .then(async Characters => {

            if (!Characters.Users.length) {

                // Si es así se elimina ese personaje del modelo Character
                await char.destroy();

            }

            // Si se eliminó un registro cambia la bandera
            if (result) bandera = 1;

        });

    if (bandera) return { status: 201, message: 'Registro eliminado con éxito' };

    else return { status: 400, message: 'El usuario no cuenta con este personaje' };

};

export default deleteChar;