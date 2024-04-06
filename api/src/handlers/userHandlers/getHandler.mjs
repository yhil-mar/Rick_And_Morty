import getUser from "../../controllers/userControllers/getUser.mjs";

const getHandler = async (req, res) => {

    const { userEmail, password } = req.query;

    try {

        const result = await getUser(userEmail, password);

        return res.status(result.status).json(result.data);

    } catch (error) {

        return res.status(500).json({ error: error.message });

    };

};

export default getHandler;