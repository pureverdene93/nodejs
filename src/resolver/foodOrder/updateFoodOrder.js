import { foodOrderModel } from "../../model/foodOrder-model.js";

export const updateFoodOrder = async (req, res) => {
  const creating = req.body;
  await foodOrderModel.findByIdAndUpdate(creating.id, {
    $set: {
      user: creating.user,
      totalPrice: creating.totalPrice,
      foodOrderItem: creating.foodOrderItem,
      status: creating.status,
    },
  });
  res.json("succesfully updated");
};
