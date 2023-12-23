import { log } from "console";
import { Transaction } from "../Models/Transaction";
import { Request, Response } from "express";
import { IRequest } from "../../Middleware/AuthVal";

export const getAllTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.find({})
      .lean()
      .populate("From", "firstName lastName");
    return res.json({ trans: transaction });
  } catch (error) {
    log(error);
  }
};

export const sendMoney = async (req: Request, res: Response) => {
  const { AcctNum, From, To, Amount, Date, TName, BankName } = req.body;
  try {
    const transaction = await Transaction.create({
      AcctNum,
      From,
      To,
      TName,
      Amount,
      Date,
      BankName,
    });

    return res.json({ trans: transaction });
  } catch (error) {
    log(error);
  }
};

export const updateTrans = async (req: Request, res: Response) => {
  const { TName, AcctNum, TStatus, BankName } = req.body;

  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, {
      TName,
      AcctNum,
      TStatus,
      BankName,
    });

    const saveTrans = transaction?.save();
    return res.json({ trans: saveTrans });
  } catch (error) {
    log(error);
  }
};

export const singleTrans = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findById(req.params.id).populate(
      "From",
      "firstName lastName"
    );

    return res.json({ trans: transaction });
  } catch (error) {
    log(error);
  }
};

export const withdraw = async (req: Request, res: Response) => {
  const { userId, AcctNum, From, To, TName, Amount, Date, BankName } = req.body;
  if (!BankName) {
    return res.json({ msg: "please input bank name" });
  }
  try {
    const transaction = await Transaction.create({
      AcctNum,
      From,
      To,
      Amount,
      TName,
      Date,
      userId,
      BankName,
    });

    return res.json({ trans: transaction });
  } catch (error) {
    log(error);
  }
};
export const deleteTrans = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    return res.json({ msg: "Deleted successfully" });
  } catch (error) {
    log(error);
  }
};

export const getSingleTransaction = async (req: IRequest, res: Response) => {
  try {
    const user = req.user;
    const transaction = await Transaction.find({ From: user })
      .lean()
      .populate("From", "firstName lastName");
    res.json({ transaction });
    console.log(transaction);
  } catch (error) {
    console.log(error);
  }
};
