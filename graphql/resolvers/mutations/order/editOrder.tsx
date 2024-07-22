import { OrderInput } from "@/generated";
import orderModel from "../../../model/orderSchema";

export const editOrder = async (
  _: OrderInput,
  { id, input }: { id: string; input: OrderInput }
) => {
  const { products, user, state, milkAmount, promotionCode } = input;

  try {
    const updatedOrder = await orderModel.findByIdAndUpdate(
      id,
      {
        products,
        user,
        state,
        milkAmount,
        promotionCode,
      },
      { new: true }
    );

    return updatedOrder;
  } catch (err) {
    console.error("Error editing order:", err);
    throw err;
  }
};
