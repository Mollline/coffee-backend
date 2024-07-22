import promotionCodeModel from "../../../model/promotionCodeSchema";
import { EditPromotionCodeInput } from "@/generated";

export const editPromotionCode = async (
  _: EditPromotionCodeInput,
  { id, input }: { id: String; input: EditPromotionCodeInput }
) => {
  const { code, expirationDate, discount } = input;
  console.log({ code, expirationDate, discount, id });
  try {
    const editedPromotionC = await promotionCodeModel.findByIdAndUpdate(
      id,
      {
        code,
        expirationDate,
        discount,
      },
      { new: true }
    );

    return editedPromotionC;
  } catch (err) {
    console.error("Error creating promotion:", err);
    throw err;
  }
};
