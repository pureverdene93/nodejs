import { foodModel } from "../../model/food-model.js";

export const get = async (req, res) => {
  const dbAuth = await foodModel.find().populate("category");
  console.log(dbAuth);
  res.json(dbAuth);
};
