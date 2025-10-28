import { foodCategoryModel } from "../../model/FoodCategoryModel.js";
import jwt from "jsonwebtoken";

export const createCategory = async (req, res) => {
  const body = req.body;
  const token = req.headers.authorization;
  try {
    const checkToken = jwt.verify(token, `key-test`);
    if (checkToken.role === "admin") {
      await foodCategoryModel.create({
        categoryName: body.categoryName,
      });
      res.json("succesfully added");
    }
  } catch (err) {
    console.log(err);
    res.status(401).json("failed");
  }
};
