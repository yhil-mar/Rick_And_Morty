// Importación del controlador
import getCharById from "../../controllers/charactersControllers/getCharById.mjs";

const getByIdHandler = async (req, res) => {

    const { id } = req.params;

    try {

        const character = await getCharById(id);

        res.status(200).json(character);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

export default getByIdHandler;