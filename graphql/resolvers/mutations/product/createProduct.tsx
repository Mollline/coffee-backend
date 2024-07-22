import productModel from "../../../model/productSchema";
import { CreateProductInput } from "@/generated";

export const createProduct = async (
  _: CreateProductInput,
  { input }: { input: CreateProductInput }
) => {
  console.log("hello");
  const { imageUrl, name, price, description, category, size } = input;
  console.log({ imageUrl, name, price, description, category, size });
  try {
    const newProduct = await productModel.create({
      imageUrl,
      name,
      price,
      description,
      category,
      size,
    });
    return newProduct;
  } catch (err) {
    console.error("Error creating product:", err);
    throw err;
  }
};
