import { foodCategoryModel } from "../../model/FoodCategoryModel.js";

export const deleteCategory = async (req, res) => {
  await foodCategoryModel.findByIdAndDelete(req.body.id);
  res.status(200).json("Succesfully deleted");
};
