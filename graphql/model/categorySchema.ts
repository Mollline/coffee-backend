import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, require: true },
});

const categoryModel =
  mongoose.models.categories || mongoose.model("categories", categorySchema);

export default categoryModel;
