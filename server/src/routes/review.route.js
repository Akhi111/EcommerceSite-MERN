import express from "express";
import authenticate from "../middleware/authenticate.js";
import {
  createTheReview,
  getAllTheReview,
} from "../controller/review.controller.js";

const router = express.Router();
router.post("/create", authenticate, createTheReview);
router.get("/product/:productId", authenticate, getAllTheReview);

export default router;
