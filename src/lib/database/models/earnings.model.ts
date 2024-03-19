import { Schema, model, models } from "mongoose";

const EarningsSchema = new Schema(
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
    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAIL"],
      default: "PENDING",
      required: "status is required",
    },
  },
  { timestamps: true } // This will add the createdAt and updatedAt fields
);

const Earnings = models?.Earnings || model("Earnings", EarningsSchema);

export default Earnings;
