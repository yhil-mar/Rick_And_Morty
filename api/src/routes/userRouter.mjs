// Importación del método Router para el enrutador
import { Router } from "express";

// Importación de los Middlewares
import validateBodyUser from "../middlewares/validateBodyUser.mjs";

// Importación de los Handlers
import postHandler from "../handlers/userHandlers/postHandler.mjs";

const router = Router();

router.post('/', validateBodyUser, postHandler);

export default router;