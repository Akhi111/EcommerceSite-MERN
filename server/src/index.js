import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import adminProductRouter from "./routes/adminProduct.route.js";
import cartRouter from "./routes/cart.route.js";
import cartItemRouter from "./routes/cartItem.route.js";
import orderRouter from "./routes/order.route.js";
import adminOrderRouter from "./routes/admin.route.js"
import reviewRouter from "./routes/review.route.js"
import ratingRouter from "./routes/rating.route.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to Shopit backend", status: true });
});

app.use("/auth", authRouter);
app.use("/api/users", userRouter);

app.use("/api/products", productRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);

export default app;
