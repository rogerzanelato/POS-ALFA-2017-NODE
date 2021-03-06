module.exports = (Model) => (req, res) => {
  const query = {
    _id: req.params.id
  }
  Model.update(query, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({}))
}