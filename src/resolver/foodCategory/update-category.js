import { foodCategoryModel } from "../../model/FoodCategoryModel.js";

export const updateCategory = async (req, res) => {
  const create = req.body;
  await foodCategoryModel.findByIdAndUpdate(create.id, {
    $set: {
      categoryName: create.categoryName,
      createdAt: create.createdAt,
      updatedAt: create.updatedAt,
    },
  });
  res.status(200).json("Succesfully updated");
};
