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

app.use(
  cors({
    origin: "http:127.0.0.1:5173",
  })
);
app.options("*", cors());
app.use(cookieParser());

app.use("/users", UserRouter);
app.use("/transaction", TransactionRouter);

app.listen(PORT, () => {
  log(`server running on port ${PORT}`);
  connectdb();
});
