import { User } from "../db.mjs";
import paramsFixer from "../helpers/paramsFixer.mjs";

const validateBodyUser = async (req, res, next) => {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

    const { email, password, username, firstName, lastName } = req.body;

    if (!email || !password || !username || !firstName || !lastName) return res.status(400).send('Please fill out all required information');

    if (!regexEmail.test(email)) return res.status(400).send({ message: 'Invalid Email' });

    if (firstName.lenght > 20 || lastName.length > 20) return res.status(400).send('The maximum number of characters for the name is 20');

    try {

        const verifyExists = [];

        let user = await User.findOne({ where: { username: username } });

        if (user) verifyExists.push('u');

        user = await User.findOne({ where: { email: email } });

        if (user) verifyExists.push('e');

        if (verifyExists.includes('u') && verifyExists.length < 2) return res.status(400).send('Username already exists');

        if (verifyExists.includes('e') && verifyExists.length < 2) return res.status(400).send('Email already exists');

        if (verifyExists.length > 1) return res.status(400).send('Username and Email already exists');

    } catch (error) {

        return res.status(500).json({ error: error.message });

    };

    req.body = {
        ...req.body,
        firstName: paramsFixer(firstName, 1),
        lastName: paramsFixer(lastName, 1),
    };

    next();

};

export default validateBodyUser;