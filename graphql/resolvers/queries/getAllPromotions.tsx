import promotionModel from "../../model/promotionSchema";

export const getAllPromotions = async () => {
  try {
    const allPromotions = await promotionModel.find({});
    return allPromotions;
  } catch (err) {
    console.error("Error fetching promotions:", err);
    throw err;
  }
};
