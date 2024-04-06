// Importación del método Router para el enrutador
import { Router } from "express";

// Importación de los Middlewares
import validateBodyUser from "../middlewares/validateBodyUser.mjs";
import validateQueryUser from "../middlewares/validateQueryUser.mjs";

// Importación de los Handlers
import postHandler from "../handlers/userHandlers/postHandler.mjs";
import getHandler from "../handlers/userHandlers/getHandler.mjs";

const router = Router();

router.post('/', validateBodyUser, postHandler);

router.get('/', validateQueryUser, getHandler);

export default router;