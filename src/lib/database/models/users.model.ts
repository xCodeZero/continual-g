import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    affiliateId: {
      type: String,
      required: true,
    },
    accountId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    creditCoins: {
      type: Number,
      default: 0, // User is given 0 credits on signup
    },
    creditBalance: {
      type: Number,
      default: 0, // User is given 0 credits on signup
    },
    password: {
      type: String,
      required: true,
    },
    suspended: {
      type: Boolean,
      default: false,
    },
    userRole: {
      type: Number,
      default: 1,
    },
    bankAccount: {
      type: String,
      default: "",
    },
    bankAccountName: {
      type: String,
      default: "",
    },
    bank: {
      type: String,
      default: "",
    },
    photo: {
      type: String,
      default: "",
    },
    coverPhoto: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } // This will add the createdAt and updatedAt fields
);

const User = models?.User || model("User", UserSchema);

export default User;
