import { authModel } from "../../model/auth-model.js";

export const get = async (req, res) => {
  const dbAuth = await authModel.find().populate("category");
  console.log(dbAuth);
  res.json(dbAuth);
};
