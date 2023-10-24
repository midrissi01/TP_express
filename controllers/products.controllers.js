let products = [
  { id: 1, name: "hp", price: 12000 },
  { id: 2, name: "dell", price: 13000 },
  { id: 3, name: "asus", price: 10000 },
  { id: 4, name: "Lenovo", price: 9000 },
];

function getAllProducts(req, res) {
  res.json(products);
}

function getProductById(req, res) {
  const idP = req.params.id;
  const p = products.find((elem) => elem.id == idP);
  res.json(p);
}

function addProduct(req, res) {
  const p = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(p);
  res.json(p);
}

function deleteProductById(req, res) {
  const id = req.params.id;
  // products = products.filter((elem) => elem.id != id);
  products.splice(id, 1);
  res.json(products);
}

function modifyById(req, res) {
  const id = req.params.id;
  const index = products.findIndex((elem) => elem.id == id);
  // products[index].name = req.body.name;
  // products[index].price = req.body.price;
  Object.assign(products[index], req.body); //le fait automatiquement en fonction des paramètres reçus
  res.json(products[index]);
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
  modifyById,
};
