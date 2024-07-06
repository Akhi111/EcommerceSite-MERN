import express from "express";
import authenticate from "../middleware/authenticate.js";
import {
  createTheRating,
  getAllTheRatings,
} from "../controller/rating.controller.js";

const router = express.Router();

router.post("/create", authenticate, createTheRating);
router.put("/product/:productId", authenticate, getAllTheRatings);

export default router;
