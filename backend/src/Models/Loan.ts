import mongoose from "mongoose";

const loan = new mongoose.Schema({
  loanType: {
    type: String,
    enum: {
      values: ["student", "business", "enterprise"],
    },
    required: true,
  },
  Amount: {
    type: String,
    required: true,
  },
  BVN: {
    type: String,
    required: true,
  },
  Attachment: {
    type: String,
    default: "",
  },
  description: {
    type: String,
  },
});

const Loan = mongoose.model("loan", loan);
export default Loan;
