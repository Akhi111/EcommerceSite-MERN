import Review from "../models/review.model.js";
import {findProductById} from "../services/product.service.js";

export async function createReview(reqData, user) {
  const product = await findProductById(reqData.productId);

  const review = new Review({
    user: user._id,
    product: product._id,
    review: reqData.review,
    createdAt: new Date(),
  });
  await product.save();
  return await review.save();
}

export async function getAllReview(productId) {
  const product = await findProductById(reqData, productId);
  return await Review.find({ product: productId }).populate("user");
}
