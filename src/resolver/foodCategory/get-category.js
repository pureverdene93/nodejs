import { foodCategoryModel } from "../../model/FoodCategoryModel.js";

export const getCategory = async (req, res) => {
  const category = await foodCategoryModel.find(req.body);
  console.log(category);
  res.json(category, "succesfully");
};
