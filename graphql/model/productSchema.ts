import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  imageUrl: { type: String, default: "" },
  name: {
    type: String,
    enum: [
      "Espresso",
      "Americano",
      "Latte",
      "Cappuccino",
      "Macchiato",
      "Mocha",
      "Flat White",
      "Cortado",
      "Ristretto",
      "Lungo",
      "Affogato",
      "Iced Coffee",
      "Cold Brew",
      "Nitro Cold Brew",
      "French Press",
      "Drip Coffee",
      "Turkish Coffee",
      "Pour Over",
      "Siphon Coffee",
    ],
    required: true,
  },
  price: {
    small: { type: Number, required: true },
    medium: { type: Number, required: true },
    large: { type: Number, required: true },
  },
  description: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String, enum: ["small", "medium", "large"], required: true },
});

const productModel =
  mongoose.models.products || mongoose.model("products", productSchema);

export default productModel;
