import orderModel from "../../../model/orderSchema";
import { OrderInput } from "@/generated";

export const createOrder = async (
  _: OrderInput,
  { input }: { input: OrderInput }
) => {
  console.log("hello");

  const { products, user, state, milkAmount, promotionCode } = input;

  console.log({ products, user, state, milkAmount, promotionCode });

  try {
    const newOrder = await orderModel.create({
      products,
      user,
      state,
      milkAmount,
      promotionCode,
    });

    return newOrder;
  } catch (err) {
    console.error("Error creating order:", err);
    throw err;
  }
};
