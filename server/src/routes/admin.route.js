import express from "express";
import {
  getAllTheOrders,
  confiremedTheOrders,
  shippOrders,
  deliverOrders,
  cancelledOrders,
  deleteOrders,
} from "../controller/adminOrder.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", authenticate, getAllTheOrders);
router.put("/:orderId/confirmed", authenticate, confiremedTheOrders);
router.put("/:orderId/ship", authenticate, shippOrders);
router.put("/:orderId/deliver", authenticate, deliverOrders);
router.put("/:orderId/cancel", authenticate, cancelledOrders);
router.put("/:orderId/delete", authenticate, deleteOrders);

export default router;