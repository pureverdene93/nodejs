import { authModel } from "../../model/auth-model.js";

export const getFoodById = async (req, res) => {
  const FoodDB = await authModel.find({
    category: req.params.id,
  });
  res.json(FoodDB);
};
