import categoryModel from "../../../model/categorySchema";

export const deleteCategory = async (_: any, { id }: { id: String }) => {
  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(id);

    return deletedCategory;
  } catch (err) {
    console.error("Error creating category:", err);
    throw err;
  }
};
