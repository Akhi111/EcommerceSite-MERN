import express from "express";
import {
  findTheProductById,
  getAllTheProducts,
} from "../controller/product.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", authenticate, getAllTheProducts);
router.get("/:id/:id", authenticate, findTheProductById);

export default router;
