const Product = require('../models/product');

async function fetch(req, res) {
  const data = await Product.find({});
  res.send(data);
}
async function getOne(req, res) {
  const id = req.params.id;
  const data = await Product.findOne({ _id: id });
  res.send(data);
}
async function create(req, res) {
  const body = req.body;
  let product = new Product({ ...body });
  product = await product.save();
  res.send(product);
}
async function update(req, res) {
  const id = req.params.id;
  const body = req.body;
  const data = await Product.findOneAndUpdate(
    { _id: id },
    { ...body },
    {
      replace: true,
    }
  );
  res.send(data);
}
async function destroy(req, res) {
  const id = req.params.id;
  const data = await Product.findOneAndDelete({ _id: id });
  res.send(data);
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
