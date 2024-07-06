import express from "express";
import {
  updateTheCartItem,
  removeTheCartItem,
} from "../controller/cartItem.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.put("/:id", authenticate, updateTheCartItem);
router.delete("/:id", authenticate, removeTheCartItem);

export default router;
