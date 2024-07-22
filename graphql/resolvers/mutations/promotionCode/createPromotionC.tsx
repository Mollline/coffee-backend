import promotionCodeModel from "../../../model/promotionCodeSchema";
import { CreatePromotionCodeInput } from "@/generated";

export const createPromotionCode = async (
  _: CreatePromotionCodeInput,
  { input }: { input: CreatePromotionCodeInput }
) => {
  console.log("hello");
  const { code, discount, expirationDate } = input;
  console.log({ code, discount, expirationDate });
  try {
    const newPromotionC = await promotionCodeModel.create({
      code,
      discount,
      expirationDate,
    });

    return newPromotionC;
  } catch (err) {
    console.error("Error creating promotion:", err);
    throw err;
  }
};
