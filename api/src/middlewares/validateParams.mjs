const validateParams = (req, res, next) => {

    const { id } = req.params;

    if (!Number(id)) return res.status(400).send({ message: 'Parámetro ID debe ser un número' });

    if (id > 826) return res.status(400).send({ message: 'Valor de ID máximo: 826' });

    next();

};

export default validateParams;