import {
  createOrder,
  findOrderById,
  usersOrderHistory,
} from "../services/order.service.js";

const createTheOrder = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await createOrder(user, req.body);
    res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findTheOrderById = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await findOrderById(req.params.id);
    res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const OrderHistory = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await usersOrderHistory(user._id);
    res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export default { createTheOrder, findTheOrderById, OrderHistory };
