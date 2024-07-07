import { findUserCart } from "..//services/cart.service.js";
import Address from "../models/address.model.js";
import product from "../models/product.model.js";
import Order from "../models/order.model.js";
import OrderItem from "..//models/orderItems.js"

export async function createOrder(user, shippAddress) {
  let address;

  try {
    if (shippAddress._id) {
      let existAddress = await Address.findById(shippAddress._id);
      address = existAddress;
    } else {
      address = new Address(shippAddress);
      address.user = user;
      await address.save();

      // Ensure user.addresses is initialized as an array [extra added code from chatgpt]
      // if (!user.address) {
      //   user.address = [];
      // }
      // this line is in used if in order.controller.js file [const user = await req.user;] for all functions not used await .if await is used there no need to use this code in order.service.js file
      user.address.push(address);
      await user.save();
    }

    const cart = await findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
      //in below line changed orderItems to OrderItems as per AI
      const orderItem = new OrderItem({
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        userId: item.userId,
        discountedPrice: item.discountedPrice,
      });
      const createdOrderItem = await orderItem.save();
      //below line changed orderItems to orderItem needs to fix this if error occures
      orderItems.push(createdOrderItem);
    }
    const createdOrder = new Order({
      user,
      orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      discount: cart.discount,
      totalItem: cart.totalItem, //changed to totalItem => to totalItems
      shippAddress: address,
    });
    const savedOrder = await createdOrder.save();
    return savedOrder;

  } catch (error) {
    throw new Error(error.message);
  }
}

export async function placeOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
}

export async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";

  return await order.save();
}

export async function shipOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";

  return await order.save();
}

export async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";

  return await order.save();
}

export async function cancelledOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELLED";

  return await order.save();
}

export async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

export async function usersOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAllOrders() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

export async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
}
