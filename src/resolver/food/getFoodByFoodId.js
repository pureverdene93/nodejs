import { foodModel } from "../../model/food-model.js";

export const getFoodByFoodId = async (req, res) => {
  try {
    const getFoodById = await foodModel.findById(req.params.foodId);
    res.status(200).json(getFoodById);
    console.log(getFoodById);
  } catch (err) {
    console.log(err);
  }
};
