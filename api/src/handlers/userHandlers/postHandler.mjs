import postUser from "../../controllers/userControllers/postUser.mjs";

const postHandler = async (req, res) => {

    const { email, password } = req.body;

    try {

        const result = await postUser(email, password);

        return res.status(201).json(result);

    } catch (error) {

        return res.status(500).json({ error: error.message });

    };

};

export default postHandler;