import { foodOrderModel } from "../../model/foodOrder-model.js";

export const createOrder = async (req, res) => {
  const create = req.body;
  await foodOrderModel.create({
    user: create.user,
    totalPrice: create.totalPrice,
    foodOrderItems: create.foodOrderItems,
    status: create.status,
    updatedAt: create.updatedAt,
  });
  res.json("succesfully ordered");
};
