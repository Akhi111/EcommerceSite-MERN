import { addCartItem, findUserCart } from "../services/cart.service.js";

export const findTheUserCart = async (req, res) => {
  const user = req.user;
  try {
    const cart = await findUserCart(user._id);
    return res.status(200).send(cart);
  } catch (error) {
    console.error("Error finding user cart:", error);
    return res.status(500).send({ error: error.message });
  }
};

export const addItemToCart = async (req, res) => {
  const user = req.user;
  try {
    const cartItem = await addCartItem(user._id, req.body);
    return res.status(200).send(cartItem);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return res.status(500).send({ error: error.message });
  }
};
