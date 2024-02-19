import postFav from "../../controllers/favoritesControllers/postFav.mjs";

const postHandler = async (req, res) => {

    const { id, name, origin, status, image, species, gender, idUser } = req.body;

    try {

        const result = await postFav(id, name, origin, status, image, species, gender, idUser);

        res.status(201).json(result);

    } catch (error) {

        res.status(500).json({ error: error.message });

    };

};

export default postHandler;