import orderModel from "../../model/orderSchema";

export const getAllOrders = async () => {
  try {
    const allOrders = await orderModel.find({});
    return allOrders;
  } catch (err) {
    console.error("Error fetching orders:", err);
    throw err;
  }
};
