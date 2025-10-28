import { foodOrderModel } from "../../model/foodOrder-model.js";
import jwt from "jsonwebtoken";

export const updateFoodOrder = async (req, res) => {
  const creating = req.body;
  const token = req.headers.authorization;
  try {
    const checkToken = jwt.verify(token, `key-test`);
    if (checkToken.id === req.params.id) {
      await foodOrderModel.findByIdAndUpdate(req.params.id, {
        $set: {
          user: creating.user,
          totalPrice: creating.totalPrice,
          foodOrderItem: creating.foodOrderItem,
          status: creating.status,
        },
      });
      res.json("succesfully updated");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("failed");
  }
};
