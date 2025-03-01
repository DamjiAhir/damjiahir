import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sendingdate: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model
const messageModel =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export { messageModel };
