import { findUserById } from "../services/user.service.js";
import { getUserIdFromToken } from "../utils/jwtProvider.js";

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(404).send({ error: "Token not found..." });
    }
    const userId = getUserIdFromToken(token);
    if(!userId){
      return res.status(401).send({ error: "Invalid token" });
    }

    const user = await findUserById(userId);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    req.user = user;
    // next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  next();
};

export default authenticate;
