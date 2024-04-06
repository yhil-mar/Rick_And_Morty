// Importación del servidor 
import app from "./src/app.mjs";

// Importación de la conexión con la Base de Datos
import { conn } from "./src/db.mjs";

//Importación de las variables de entorno
import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

// Acá se realiza la conexión a la base de datos en forma de una promesa, la cual hasta que no suceda no hará que pueda continuar la ejecución de la aplicación
conn.sync({ alter: true }).then(() => {

    // Acá se realiza el "listen" para asignarle un puerto al servidor
    app.listen(PORT, () => {
        console.log('Listening at port: ' + PORT);
    });

});