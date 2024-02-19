const validateBodyUser = (req, res, next) => {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send({ message: 'Hace falta información para ingresar' });

    if (!regexEmail.test(email)) return res.status(400).send({ message: 'Email no válido' });

    next();

};

export default validateBodyUser;