import { foodModel } from "../../model/food-model.js";

export const getFoodById = async (req, res) => {
  const FoodDB = await foodModel.find({
    category: req.params.id,
  });
  res.json(FoodDB);
};
