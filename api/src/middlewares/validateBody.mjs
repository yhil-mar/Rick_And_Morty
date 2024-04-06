const validateBody = (req, res, next) => {

    const { id, name, origin, status, image, species, gender } = req.body;

    if (!id || !name || !origin || !status || !image || !species || !gender)
        return res.status(400).send({ message: 'Information is nedeed' });

    next();

};

export default validateBody;