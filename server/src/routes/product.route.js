import express from "express";
import authenticate from "../middleware/authenticate.js";
import {
  findTheProductById,
  getAllTheProducts,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", authenticate, getAllTheProducts);
router.get("/:id/:id", authenticate, findTheProductById);

export default router;
