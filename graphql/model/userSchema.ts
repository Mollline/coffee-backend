import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "" },
  address: { type: String, default: "" },
  paymentInfo: {
    cardHolder: { type: String, default: "" },
    cardNumber: { type: String, default: "" },
    expirationDate: { type: String, default: "" },
    cvv: { type: String, default: "" },
  },
  favorites: { type: [String], default: [] },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
