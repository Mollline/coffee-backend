import productModel from "../../model/productSchema";

export const getAllProducts = async () => {
  try {
    const allProducts = await productModel.find({});
    return allProducts;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};
