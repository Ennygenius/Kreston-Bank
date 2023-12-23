import mongoose from "mongoose";
import dotEnv from "dotenv";
import { log } from "console";

dotEnv.config();

const db: any = process.env.DB_URI;

export const connectdb = async () => {
  try {
    await mongoose.connect(db);
    log("Database connected successfully");
  } catch (error) {
    console.log(error, "Connection failed");
  }
};
