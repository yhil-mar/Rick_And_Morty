import { User } from "../../db.mjs";
import { Op } from "sequelize";

// Importación de Jose para uso de JWT en el lado de autenticación 
import { SignJWT } from "jose";

const { JWT_PRIVATE_KEY } = process.env;

const getUser = async (userEmail, password) => {

    // Búsqueda 
    const user = await User.findOne({

        where: {
            [Op.or]: [
                { email: userEmail },
                { username: userEmail },
            ]
        },

    });

    // Verificación de contraseña
    if (user) {

        if (password !== user.password) return {status: 400, data: 'Invalid Username / Email or Password' };

    };

    const idUser = user.id;

    // Acá se realiza una instancia de la clase SignJWT que nos servirá para poder realizar el Token de auntenticación
    // Como parámetro de esta clase es necesario poner el ID del usuario creado o encontrado dentro de un objeto para lo
    // cual se recomienda obtenerlo anteriormente del arreglo de user
    const jwtConstructor = new SignJWT({ idUser });

    // Instancia de clase TextEncoder la cual nos sirve para codificar la firma en Uint8Array que necesita JWT
    const encoder = new TextEncoder();

    // Dentro de esta variable se guardará el Token y se puede configurar con lo que se necesite
    const jwt = await jwtConstructor.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        // Fecha actual
        .setIssuedAt()
        // Tiempo de expiración del Token
        .setExpirationTime('1h')
        // Firma necesaria para la cual se debe usar encoder
        .sign(encoder.encode(JWT_PRIVATE_KEY));

    const userAuth = { user, jwt: jwt };

    return {status: 202, data: userAuth};

};

export default getUser;