import { Schema, model, models } from "mongoose";

const CashoutSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: "userId is required",
      ref: "User",
    },
    accountId: {
      type: String,
      required: "source is required",
    },
    source: {
      type: String,
      required: "source is required",
    },
    source_id: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    bankAccount: {
      type: String,
      required: true,
    },
    bankAccountName: {
      type: String,
      required: true,
    },
    bank: {
      type: String,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAIL"],
      default: "PENDING",
      required: "status is required",
    },
  },
  { timestamps: true } // This will add the createdAt and updatedAt fields
);

const Cashout = models?.Cashout || model("Cashout", CashoutSchema);

export default Cashout;
