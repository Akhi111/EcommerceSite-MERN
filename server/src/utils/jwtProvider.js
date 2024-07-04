import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};

export const getUserIdFromToken = (token) => {
  try {
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    return verifyToken.userId;
  } catch (error) {
    throw new Error(`Failed to verify token: ${error.message}`);
  }
};
