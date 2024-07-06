import express from "express";
import {
  createTheOrder,
  findTheOrderById,
  OrderHistory,
} from "../controller/order.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.post("/", authenticate, createTheOrder);
router.get("/user", authenticate, OrderHistory);
router.get("/:id", authenticate, findTheOrderById);

export default router;
