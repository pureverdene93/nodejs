import { foodCategoryModel } from "../../model/FoodCategoryModel.js";

export const getCategory = async (req, res) => {
  const category = await foodCategoryModel.find();
  console.log(category);
  res.json(category, "succesfully");
};
