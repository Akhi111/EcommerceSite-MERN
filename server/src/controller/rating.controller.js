import { createRating, getProductRating } from "../services/rating.servece.js";

export const createTheRating = async (req, res) => {
  const user = req.user;
  try {
    const rating = await createRating(req.body, user);
    return res.status(201).send(rating);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getAllTheRatings = async (req, res) => {
  const productId = req.params.productId;
  try {
    const ratings = await getProductRating(productId);
    return res.status(201).send(ratings);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
