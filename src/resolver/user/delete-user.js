import { userModel } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.body.id);
  res.json("succesfully deleted");
};
