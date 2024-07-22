import productModel from "../../../model/productSchema";

export const deleteProduct = async (_: any, { id }: { id: string }) => {
  try {
    const deleteProduct = await productModel.findByIdAndDelete(id);
    if (!deleteProduct) {
      throw new Error("user not found");
    }
    return deleteProduct;
  } catch (error) {
    console.log(error);
  }
};
