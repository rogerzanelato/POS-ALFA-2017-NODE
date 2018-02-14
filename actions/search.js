module.exports = (Model) => (req, res, query = {}) => {
    const params = {
        $regex: req.query.name,
        $options: 'i'
    }
    Model.find({ "name": params })
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json({}))
}