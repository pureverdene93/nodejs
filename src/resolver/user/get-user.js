import { userModel } from "../../model/user-model.js";

export const getUser = async (req, res) => {
  const userDB = await userModel.find(req.body);
  console.log(userDB);
  res.json(userDB, "succesfully");
};
