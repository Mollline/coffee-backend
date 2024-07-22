import promotionCodeModel from "../../../model/promotionCodeSchema";

export const deletePromotionCode = async (_: any, { id }: { id: String }) => {
  try {
    const deletedPromotion = await promotionCodeModel.findByIdAndDelete(id);
    return deletedPromotion;
  } catch (err) {
    console.error("Error creating promotion:", err);
    throw err;
  }
};
