import { foodOrderModel } from "../../model/foodOrder-model.js";

export const getFoodOrder = async (req, res) => {
  const foodDB = await foodOrderModel.find().populate([
    "foodOrderItem.food",
    {
      path: "user",
      populate: "orderedFoods",
    },
  ]);
  console.log(foodDB);
  res.json(foodDB);
};
