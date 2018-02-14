module.exports = (Model) => (req, res) => {
  const query = {
    _id: req.params.id
  }

  return Model.findOne(query)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({}))
}