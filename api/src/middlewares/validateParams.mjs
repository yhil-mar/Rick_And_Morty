const validateParams = (req, res, next) => {

    const { id } = req.params;

    if (!Number(id)) return res.status(400).send('ID must be a number');

    if (id > 826) return res.status(400).send('Maximum ID value: 826' );

    next();

};

export default validateParams;