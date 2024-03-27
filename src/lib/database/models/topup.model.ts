import { Schema, model, models } from "mongoose";

const TopupSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: "userId is required",
      ref: "User",
    },
    source: {
      type: String,
      enum: ["CREDIT", "ORDER"],
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
    image: {
      type: String,
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

const Topup = models?.Topup || model("Topup", TopupSchema);

export default Topup;
