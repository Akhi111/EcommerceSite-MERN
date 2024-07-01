import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};
const getUserIdFromToken = (token) => {
  const verifyToken = jwt.verify(token, SECRET_KEY);
  return verifyToken.userId;
};
export default generateToken;
