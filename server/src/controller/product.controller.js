import {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
} from "../services/product.service.js";

const createTheProduct = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteTheProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateTheProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findTheProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await findProductById(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllTheProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const products = await getAllProducts(req.query);
    return res.status(201).send(products);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createTheMultipleProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await createMultipleProduct(req.query);
    return res.status(201).send({ message: "Products created successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export default {
  createTheProduct,
  deleteTheProduct,
  updateTheProduct,
  findTheProductById,
  getAllTheProducts,
  createTheMultipleProducts,
};
