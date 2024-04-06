// Importación de método para verficar Token de autenticación
import { jwtVerify } from "jose";

import { User } from "../db.mjs";

const authUser = async (req, res, next) => {

    const { authorization } = req.headers;

    const { JWT_PRIVATE_KEY } = process.env;

    const encoder = new TextEncoder();

    if (!authorization) return res.status(401).send('Does not have authorization' );

    try {

        const { payload } = await jwtVerify(authorization, encoder.encode(JWT_PRIVATE_KEY));

        const user = await User.findByPk(payload.idUser);

        if (user) {

            const typeCRUD = req.method;

            if (typeCRUD === 'POST') {

                req.body = {
                    ...req.body,
                    idUser: payload.idUser
                };

            } else if (typeCRUD === 'GET' || typeCRUD === 'DELETE') {

                req.params = {
                    ...req.params,
                    idUser: payload.idUser
                };

            };

            next();

        } else return res.status(401).send('Invalid authorization token' );


    } catch (error) {

        return res.status(401).send('Invalid authorization token');

    };

};

export default authUser;