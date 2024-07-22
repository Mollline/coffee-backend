import orderModel from "../../../model/orderSchema";

export const deleteOrder = async (_: any, { id }: { id: string }) => {
  try {
    const deleteOrder = await orderModel.findByIdAndDelete(id);
    return deleteOrder;
  } catch (err) {
    console.error("Error deleting order:", err);
    throw err;
  }
};
