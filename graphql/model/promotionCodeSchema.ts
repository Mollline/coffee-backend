import mongoose from "mongoose";

const { Schema } = mongoose;

const promotionCodeSchema = new Schema({
  code: { type: String, required: true },
  discount: { type: Number, required: true },
  expirationDate: { type: String, required: true },
});

const promotionCodeModel =
  mongoose.models.promotionCodes ||
  mongoose.model("promotionCodes", promotionCodeSchema);

export default promotionCodeModel;
