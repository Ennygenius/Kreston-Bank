import { Request, Response } from "express";
import { User } from "../Models/Users";
import { Transaction } from "../Models/Transaction";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import dotEnv from "dotenv";
import { IRequest, VToken } from "../../Middleware/AuthVal";
import { log } from "console";

dotEnv.config();

export const getAllUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.find({});
  res.json({ users: user });
});

export const registerUser = async (req: Request, res: Response) => {
  //destructure the fields from the body
  const { firstName, lastName, Email, Password, confirmPassword, Gender } =
    req.body;
  const file = req.file?.path;
  console.log(req.file?.path);

  //if any field is ommited && not filled
  if (
    !firstName ||
    !lastName ||
    !Email ||
    !Password ||
    !confirmPassword ||
    !Gender
  ) {
    return res.json({ message: "All fields must be filled" });
  }

  //check if the fields match
  if (Password !== confirmPassword) {
    return res.json({ message: "Password must match" });
  }

  //check if the email already exist
  const user = await User.findOne({ Email });
  if (user) {
    return res.json({ message: "User with that email already exists" });
  }

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const HashedPassword = bcrypt.hashSync(Password, salt);
  //create and save the user
  const newUser = new User({
    firstName,
    lastName,
    Email,
    Password: HashedPassword,
    confirmPassword: HashedPassword,
    profilePicture: req.file?.path,
    Gender,
  });
  await newUser.save();

  // Show the user
  return res.status(200).json({ user: newUser });
};

export const login = async (req: Request, res: Response) => {
  const { Email, Password } = req.body;

  //if any field is ommited && not filled
  if (!Email || !Password) {
    res.json({ message: "All fields must be filled" });
  }

  try {
    // check if the user exist

    const user = await User.findOne({ Email }).select("+Password");

    if (!user) {
      return res.json({ message: "User does not exist" });
    }

    const comparePassword = await bcrypt.compare(Password, user.Password);
    if (!comparePassword) {
      return res.json({ message: "Password does not match" });
    }
    const payload = { user };

    const token = jwt.sign(payload, `${process.env.Secret}`, {
      expiresIn: "10d",
    });
    // Determine if the user is an admin or not
    const loginResponse = user?.isAdmin
      ? { successMessage: "Admin Login" }
      : { successMessage: "User Login" };
    if (user) {
      return res.json({
        Email,
        token,
        ...loginResponse,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = asyncHandler(
  async (req: IRequest, res: Response) => {
    const user = req.user;
    res.json({ user });
  }
);
