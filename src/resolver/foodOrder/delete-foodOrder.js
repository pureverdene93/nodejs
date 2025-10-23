import { foodOrderModel } from "../../model/foodOrder-model.js";

export const deleteOrder = async (req, res) => {
  await foodOrderModel.findByIdAndDelete(req.body.id);
  res.json("succesfully deleted");
};
