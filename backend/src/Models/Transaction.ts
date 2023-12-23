import mongoose from "mongoose";

interface transaction {
  TName: String;
  AcctNum: String;
  From: String;
  To: String;
  Amount: Number;
  Date: Date;
  TStatus: Boolean;
  userId: string;
}

enum Status {
  Pending = "Pending",
  Success = "Success",
}

enum TransType {
  Transfer = "Transfer",
  Withdraw = "Withdraw",
}

const schema = mongoose.Schema;

const transaction = new schema({
  id: {
    type: schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  TName: {
    type: String,
    enum: Object.values(TransType),
    // default: "Transfer",
  },
  AcctNum: {
    type: String,
  },
  From: {
    type: schema.Types.ObjectId,
    ref: "User",
  },

  To: {
    type: String,
  },
  Amount: {
    type: Number,
  },
  BankName: {
    type: String,
  },
  TStatus: {
    type: String,
    enum: Object.values(Status),
    default: "Pending",
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

export const Transaction = mongoose.model("Transaction", transaction);
