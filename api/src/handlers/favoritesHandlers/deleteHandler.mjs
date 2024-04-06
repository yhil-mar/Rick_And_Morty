import deleteFav from "../../controllers/favoritesControllers/deleteFav.mjs";

const deleteHandler = async (req, res) => {

    const { id, idUser } = req.params;

    try {

        const result = await deleteFav(id, idUser);

        res.status(result.status).send(result.message );

    } catch (error) {

        res.status(500).json({ error: error.message });

    };

};

export default deleteHandler;