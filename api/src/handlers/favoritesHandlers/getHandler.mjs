import getFav from "../../controllers/favoritesControllers/getFav.mjs";

const getHandler = async (req, res) => {

    const { idUser } = req.params;

    try {

        const result = await getFav(idUser);

        res.status(201).send(result);

    } catch (error) {

        res.status(500).json({ error: error.message });

    };

};

export default getHandler;