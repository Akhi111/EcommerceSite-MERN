import app from "./index.js";
import connectMongoDB from "./config/db.js";

const PORT = 5454;
app.listen(PORT, async() => {
  await connectMongoDB();
  console.log("Server is running on PORT:", PORT);
});
