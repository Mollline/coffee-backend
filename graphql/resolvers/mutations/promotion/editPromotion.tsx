import promotionModel from "../../../model/promotionSchema";

export const editPromotion = async (
  _: any,
  { id, input }: { id: String; input: any }
) => {
  console.log("hello");
  const { title, description } = input;
  console.log({ title, description, id });
  try {
    const editedPromotion = await promotionModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      { new: true }
    );

    return editedPromotion;
  } catch (err) {
    console.error("Error creating promotion:", err);
    throw err;
  }
};
