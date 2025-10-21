import { authModel } from "../../../model/auth-model.js";
export const deleted = async (req, res) => {
  await authModel.findByIdAndDelete(req.body.id);
  res.status(200).json("Succesfully deleted");
};
