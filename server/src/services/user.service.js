import User from "..//models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken, getUserIdFromToken } from "../utils/jwtProvider.js";

export const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    // Check if user with the same email already exists
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error(
        `A user with this email address already exists: ${email}`
      );
    }

    password = await bcrypt.hash(password, 10);

    // Create the user in the database
    const newUser = await User.create({ firstName, lastName, email, password });
    console.log("User has been created:", newUser);
    return newUser;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("address");
    if (!user) {
      throw new Error("User not found with id :", userId);
    }
    return user;
  } catch (error) {
    throw new Error(`Failed to find user by id: ${error.message}`);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with email :", email);
    }
    return user;
  } catch (error) {
    throw new Error(`Failed to find user by email: ${error.message}`);
  }
};

export const getUserProfileByToken = async (token) => {
  try {
    const userId = getUserIdFromToken(token);
    const user = await findUserById(userId);
    if (!user) {
      throw new Error(`User not found with id: ${userId}`);
    }
    console.log("user", user);
    return user;
  } catch (error) {
    throw new Error(`Failed to get user profile: ${error.message}`);
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
