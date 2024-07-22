import categoryModel from "../../../model/categorySchema";
import { EditCategoryInput } from "@/generated";

export const editCategory = async (
  _: EditCategoryInput,
  { id, input }: { id: String; input: EditCategoryInput }
) => {
  console.log("hello");
  const { name } = input;
  console.log({ name, id });
  try {
    const editedCategory = await categoryModel.findByIdAndUpdate(
      id,
      {
        name,
      },
      {
        new: true,
      }
    );

    return editedCategory;
  } catch (err) {
    console.error("Error creating category:", err);
    throw err;
  }
};
