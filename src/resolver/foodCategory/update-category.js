import { foodCategoryModel } from "../../model/FoodCategoryModel.js";

export const updateCategory = async (req, res) => {
  const create = req.params;
  await foodCategoryModel.findByIdAndUpdate(
    create.id,
    {
      $set: {
        categoryName: req.body.categoryName,
        updatedAt: req.body.updatedAt,
      },
    },
    { new: true }
  );
  res.status(200).json("Succesfully updated");
};
