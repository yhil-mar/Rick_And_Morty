// Importación del método Router para el enrutador
import { Router } from "express";

// Importación de Middlewares
import authUser from "../middlewares/authUser.mjs";
import validateParams from "../middlewares/validateParams.mjs";
import validateBody from "../middlewares/validateBody.mjs";

// Importación de los Handlers
import getByIdHandler from "../handlers/charactersHandlers/getByIdHandler.mjs";
import getHandler from "../handlers/charactersHandlers/getHandler.mjs";
import postHandler from "../handlers/charactersHandlers/postHandler.mjs";
import deleteHandler from "../handlers/charactersHandlers/deleteHandler.mjs";

const router = Router();

router.get('/:id', validateParams, getByIdHandler);

router.get('/detail/:id', validateParams, getByIdHandler);

router.get('/', authUser, getHandler);

router.post('/', validateBody, authUser, postHandler);

router.delete('/:id', validateParams, authUser, deleteHandler);

export default router;