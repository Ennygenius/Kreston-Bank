import { log } from "console";
import express, { Request, Response } from "express";
import UserRouter from "./Routes/User";
import TransactionRouter from "./Routes/Transaction";
import dotEnv from "dotenv";
import { connectdb } from "./utils/db";
import cors from "cors";
import cookieParser from "cookie-parser";

dotEnv.config();

const app = express();

const PORT = process.env.PORT || 2005;

app.use(express.json());

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://krestonbank.onrender.com"
  );
  // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(cookieParser());

app.use("/users", UserRouter);
app.use("/transaction", TransactionRouter);

app.listen(PORT, () => {
  log(`server running on port ${PORT}`);
  connectdb();
});
