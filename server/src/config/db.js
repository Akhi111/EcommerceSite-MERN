import mongoose from "mongoose";

const mongoURL =
  "mongodb+srv://acharekarakhil:CIHsPOUqncm3UddT@cluster0.f4xdknw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectMongoDB = () => {
  return mongoose.connect(mongoURL);
};

export default connectMongoDB;