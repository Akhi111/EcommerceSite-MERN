import {
  createOrder,
  findOrderById,
  usersOrderHistory,
} from "../services/order.service.js";

export const createTheOrder = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await createOrder(user, req.body);
    res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const findTheOrderById = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await findOrderById(req.params.id);
    res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const OrderHistory = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await usersOrderHistory(user._id);
    res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
