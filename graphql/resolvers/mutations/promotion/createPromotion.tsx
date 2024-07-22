import promotionModel from "../../../model/promotionSchema";

export const createPromotion = async (_: any, { input }: { input: any }) => {
  console.log("hello");
  const { productId, title, description } = input;
  console.log({ productId, title, description });
  try {
    const newPromotion = await promotionModel.create({
      productId,
      title,
      description,
    });

    return newPromotion;
  } catch (err) {
    console.error("Error creating promotion:", err);
    throw err;
  }
};
