import {
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelledOrder,
  getAllOrders,
  deleteOrder,
} from "../services/order.service.js";

export const getAllTheOrders = async (req, res) => {
  try {
    const orders = await getAllOrders();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const confiremedTheOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await confirmedOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const shippOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await shipOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const deliverOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await deliverOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const cancelledOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await cancelledOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await deleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
