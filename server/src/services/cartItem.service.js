import CartItem from "../models/cartItem.model.js";
import { findUserById } from "./user.service.js";

export async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error(`Cart item not found: ${cartItemId}`);
    }
    const user = await findUserById(item.userId);
    if (!user) {
      throw new Error(`User item not found: ${userId}`);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("you cant't update this cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeCartItem(userId, cartItemId) {
  try {
    const cartItem = await findCartItemById(cartItemId);
    const user = await findUserById(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
      await CartItem.findByIdAndDelete(cartItemId);
    } else {
      throw new Error("You can't remove another user's item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function findCartItemById(cartItemId) {
  try {
    const cartItem = await findCartItemById(cartItemId);
    if (cartItem) {
      return cartItem;
    } else {
      throw new Error(`CartItem not found with id ${cartItemId}`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

