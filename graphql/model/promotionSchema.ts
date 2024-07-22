import mongoose from "mongoose";

const { Schema } = mongoose;

const promotionSchema = new Schema({
  productId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const promotionModel =
  mongoose.models.promotions || mongoose.model("promotions", promotionSchema);

export default promotionModel;
