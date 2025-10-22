import { foodOrderModel } from "../../model/foodOrder-model.js";

export const getFoodOrder = async (req, res) => {
  const foodDB = await foodOrderModel.find(req.body);
  console.log(foodDB);
  res.json(foodDB, "succesfully");
};
