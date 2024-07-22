import userModel from "../../../model/userSchema";
import { EditUserInput } from "@/generated/index";

export const editUser = async (
  _: EditUserInput,
  { id, input }: { id: string; input: EditUserInput }
) => {
  const { fullName, email, password, avatar, address, paymentInfo, favorites } =
    input;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        fullName,
        email,
        password,
        avatar,
        address,
        paymentInfo,
        favorites,
      },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    console.error("Error editing user:", error);
    throw new Error("Failed to edit user");
  }
};
