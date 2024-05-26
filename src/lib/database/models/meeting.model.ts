import { Schema, model, models } from "mongoose";

const MeetingSchema = new Schema(
  {
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

    profession: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
    },
    organization: {
      type: String,
      required: true,
    },
    reason: {
      type: [String],
      required: true,
    },
    question: {
      type: String,
    },
    agree: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // This will add the createdAt and updatedAt fields
);

const Meeting = models?.Meeting || model("Meeting", MeetingSchema);

export default Meeting;
