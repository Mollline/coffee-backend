import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  products: [
    {
      productId: { type: String, required: true },
      size: {
        type: String,
        enum: ["small", "medium", "large"],
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  user: { type: String, required: true },
  date: { type: Date, default: Date.now },
  state: {
    type: String,
    enum: ["placed", "in progress", "on your way", "delivered"],
    required: true,
  },
  milkAmount: { type: Number, min: 1, max: 10, required: true },
  promotionCode: { type: String, default: null },
});
const orderModel =
  mongoose.models.orders || mongoose.model("orders", orderSchema);

export default orderModel;
