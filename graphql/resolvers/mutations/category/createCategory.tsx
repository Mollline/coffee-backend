import categoryModel from "../../../model/categorySchema";
import { CreateCategoryInput } from "@/generated";

export const createCategory = async (
  _: CreateCategoryInput,
  { input }: { input: CreateCategoryInput }
) => {
  console.log("hello");
  const { name } = input;
  console.log({ name });
  try {
    const newCategory = await categoryModel.create({
      name,
    });

    return newCategory;
  } catch (err) {
    console.error("Error creating category:", err);
    throw err;
  }
};
