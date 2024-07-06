import {
  createUser,
  findUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllUsers,
} from "../services/user.service.js";
import {generateToken} from "../utils/jwtProvider.js";
import bcrypt from "bcrypt";
import {createCart} from "../services/cart.service.js";

export const signup = async (req, res) => {
  try {
    const user = await createUser(req.body);
    const jwt = generateToken(user._id);

    await createCart(user);

    return res.status(200).send({ jwt, message: "signup successful" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const signin = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .send({ message: "user not found with email: ", email });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Password" });
    }
    const jwt = generateToken(user._id);
    return res.status(200).send({ jwt, message: "signin successful" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
