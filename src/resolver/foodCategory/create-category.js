import { foodCategoryModel } from "../../model/FoodCategoryModel.js";

export const createCategory = async (req, res) => {
  const body = req.body;
  await foodCategoryModel.create({
    categoryName: body.categoryName,
    // createdAt: body.createdAt,
    // updatedAt: body.updatedAt,
  });
  res.json("succesfully added");
};
