import express from "express";
import { addItemToCart, findTheUserCart } from "../controller/cart.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", authenticate, findTheUserCart);
router.put("/add", authenticate, addItemToCart);

export default router;
