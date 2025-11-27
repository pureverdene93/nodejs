import { foodOrderModel } from "../../model/foodOrder-model.js";
import jwt from "jsonwebtoken";

export const updateFoodOrder = async (req, res) => {
  const creating = req.body;
  console.log(creating, "req.body");

  console.log(req.params.id, "asdasd");

  // const token = req.headers.authorization?.split(" ")[1];
  try {
    await foodOrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          user: creating.user,
          totalPrice: creating.totalPrice,
          foodOrderItem: creating.foodOrderItem,
          status: creating.status,
        },
      },
      { new: true }
    );
    res.json("succesfully updated");
  } catch (err) {
    console.log(err);
    res.status(500).json("failed");
  }
};
