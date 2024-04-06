// Importación del método Router para el enrutador
import { Router } from "express";

// Importación de Middlewares
import authUser from "../middlewares/authUser.mjs";
import validateParams from "../middlewares/validateParams.mjs";
import validateBody from "../middlewares/validateBody.mjs";

// Importación de los Handlers
import getHandler from "../handlers/favoritesHandlers/getHandler.mjs";
import postHandler from "../handlers/favoritesHandlers/postHandler.mjs";
import deleteHandler from "../handlers/favoritesHandlers/deleteHandler.mjs";

const router = Router();

router.get('/', authUser, getHandler)

router.post('/', validateBody, authUser, postHandler);

router.delete('/:id', validateParams, authUser, deleteHandler);

export default router;