import express from "express";
import {
  getAllTransaction,
  sendMoney,
  updateTrans,
  deleteTrans,
  withdraw,
  getSingleTransaction,
  singleTrans,
} from "../controllers/Transactions";
import { Admin, VToken } from "../../Middleware/AuthVal";

const Router = express();

Router.post("/sendMoney", VToken, sendMoney)
  .post("/withdraw", VToken, withdraw)
  .get("/transaction", VToken, getSingleTransaction)
  .get("/", VToken, Admin, getAllTransaction)
  .get("/:id", VToken, Admin, singleTrans)
  .patch("/:id", VToken, Admin, updateTrans)
  .delete("/:id", VToken, Admin, deleteTrans);

export default Router;
