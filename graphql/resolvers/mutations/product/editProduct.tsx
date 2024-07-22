import productModel from "../../../model/productSchema";
import { EditProductInput } from "@/generated";

export const editProduct = async (
  _: EditProductInput,
  { id, input }: { id: EditProductInput; input: EditProductInput }
) => {
  const { imageUrl, name, price, description, category, size } = input;
  try {
    const editProduct = await productModel.findByIdAndUpdate(
      id,
      {
        imageUrl,
        name,
        price,
        description,
        category,
        size,
      },
      { new: true }
    );
    return editProduct;
  } catch (err) {
    console.log(err);
  }
};
