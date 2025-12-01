import { foodOrderModel } from "../../model/foodOrder-model.js";

export const getFoodOrderByUsedrId = async (req, res) => {
  const userOrder = await foodOrderModel
    .find({ user: req.params.id })
    .populate({ path: "foodOrderItem.food" })
    .populate({
      path: "user",
      populate: {
        path: "adress",
      },
    });
  res.json(userOrder);
};
