import deleteChar from "../../controllers/charactersControllers/deleteChar.mjs";

const deleteHandler = async (req, res) => {

    const { id, idUser } = req.params;

    try {

        const result = await deleteChar(id, idUser);

        res.status(result.status).send(result.message);

    } catch (error) {

        res.status(500).json({ error: error.message });

    };

};

export default deleteHandler;