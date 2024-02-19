// Importación del método Router para el enrutador
import { Router } from "express";

// Importación de Middlewares
import validateParams from "../middlewares/validateParams.mjs";

// Importación de los Handlers
import getByIdHandler from "../handlers/charactersHandlers/getByIdHandler.mjs";

const router = Router();

router.get('/:id', validateParams, getByIdHandler);

router.get('/detail/:id', validateParams, getByIdHandler);

export default router;