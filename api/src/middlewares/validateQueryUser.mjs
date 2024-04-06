import { User } from "../db.mjs";
import { Op } from "sequelize";

const validateQueryUser = async (req, res, next) => {

    const { userEmail, password } = req.query;

    if (!userEmail || !password) return res.status(400).send('Please fill out all required information' );

    try {

        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: userEmail },
                    { username: userEmail }
                ]
            }
        });

        if (!user) return res.status(400).send('User does not exist');

    } catch (error) {

        return res.status(500).json({ error: error.message });

    };

    next();

};

export default validateQueryUser;