// Importación del método Router para el enrutador
import { Router } from "express";

// Importación de los middlewares
import authUser from "../middlewares/authUser.mjs";

// Importación de los routers
import charRouter from './charactersRouter.mjs';
import userRouter from './userRouter.mjs';
import favRouter from './favoritesRouter.mjs';

// Creación del enrutador principal

const router = Router();

// Configuración de los routers

router.use('/character', charRouter);
router.use('/login', userRouter);
router.use('/favorites', favRouter);

export default router;