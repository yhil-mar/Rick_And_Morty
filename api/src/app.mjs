// Importación de dependencias instaladas

import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routes/index.mjs";

// Importación de middlewares locales


// Crear variable de creación del servidor con Express y variable del puerto a utilizar

const app = express();

// Implementación de middlewares

app.use(morgan('dev'));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());

// Implementación del enrutador para rutas de la aplicación

app.use('/', router);


// Exportación del servidor creado
export default app;