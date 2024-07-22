import categoryModel from "../../model/categorySchema";

export const getAllCategories = async () => {
  try {
    const allCategorys = await categoryModel.find({});
    return allCategorys;
  } catch (err) {
    console.error("Error fetching categorys:", err);
    throw err;
  }
};
