import promotionModel from "../../../model/promotionSchema";

export const deletePromotion = async (_: any, { id }: { id: String }) => {
  try {
    const deletedPromotion = await promotionModel.findByIdAndDelete(id);
    return deletedPromotion;
  } catch (err) {
    console.error("Error creating promotion:", err);
    throw err;
  }
};
