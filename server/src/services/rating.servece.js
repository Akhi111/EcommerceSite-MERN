import Rating from "../models/rating.model.js";
import {findProductById} from "../services/product.service.js";

export async function createRating(req, user) {
  const product = await findProductById(req.productId);

  const rating = new Rating({
    product: product._id,
    user: user._id,
    reating: req.rating,
    createdAt: new Date(),
  });

  return await rating.save();
}

export async function getProductRating(productId) {
  return await Rating.find({ product: productId });
}