import { foodCategoryModel } from "../../model/FoodCategoryModel.js";
import jwt from "jsonwebtoken";

export const updateCategory = async (req, res) => {
  const create = req.params;
  const token = req.headers.authorization;
  try {
    const checkToken = jwt.verify(token, `key-test`);
    if (checkToken.role === "admin") {
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
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("failed");
  }
};
