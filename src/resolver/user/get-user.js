import { userModel } from "../../model/user-model.js";

export const getUser = async (req, res) => {
  const userDB = await userModel.find().populate("orderedFoods");
  console.log(userDB);
  res.json(userDB, "succesfully");
};
