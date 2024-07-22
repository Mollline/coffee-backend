import userModel from "../../../model/userSchema";
export const deleteUser = async (_: any, { id }: { id: string }) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new Error("user not found");
    }
    console.log("user deleted:", deletedUser);
    return deletedUser;
  } catch (error) {
    console.error("Error in deleteuser mutation:", error);
    throw new Error("Error deleting user");
  }
};
