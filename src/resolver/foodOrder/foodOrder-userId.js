import { foodOrderModel } from "../../model/foodOrder-model.js";

export const getFoodOrderByUsedrId = async (req, res) => {
  const userOrder = await foodOrderModel
    .find({ user: req.params.id })
    .populate({ path: "foodOrderItem.food" });
  res.json(userOrder);
};
