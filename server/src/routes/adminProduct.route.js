import express from "express";
import {
  createTheProduct,
  deleteTheProduct,
  updateTheProduct,
  createTheMultipleProducts,
} from "../controller/product.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.post("/", authenticate, createTheProduct);
router.post("/creates", authenticate, createTheMultipleProducts);
router.delete("/:id", authenticate, deleteTheProduct);
router.put("/:id", authenticate, updateTheProduct);

export default router;
