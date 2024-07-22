import promotionCodeModel from "../../model/promotionCodeSchema";

export const getAllPromotionCodes = async () => {
  try {
    const allPromotionsC = await promotionCodeModel.find({});
    return allPromotionsC;
  } catch (err) {
    console.error("Error fetching promotions:", err);
    throw err;
  }
};
