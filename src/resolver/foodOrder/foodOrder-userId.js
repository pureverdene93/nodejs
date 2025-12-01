import { foodOrderModel } from "../../model/foodOrder-model.js";

export const getFoodOrderByUsedrId = async (req, res) => {
  const userOrder = await foodOrderModel
    .find({ user: req.params.id })
    .populate([
      "foodOrderItem.food",
      {
        path: "user",
        populate: "orderedFoods",
      },
    ]);
  res.json(userOrder);
};
