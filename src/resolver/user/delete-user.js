import { userModel } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.body.id).populate("user");
  res.json("succesfully deleted");
};
