import app from "./index.js";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5454;
app.listen(PORT, async() => {
  await connectMongoDB();
  console.log("Server is running on PORT:", PORT);
});
