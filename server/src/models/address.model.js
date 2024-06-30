import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users", //ref: users from user.model.js users table foreign key
  },
  mobile: {
    type: String, // use string for +91 "+" sign
    required: true,
  },
});
const Address = mongoose.model("addresses", addressSchema);
export default Address;
