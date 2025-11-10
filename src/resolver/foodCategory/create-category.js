import { foodCategoryModel } from "../../model/FoodCategoryModel.js";
import jwt from "jsonwebtoken";

export const createCategory = async (req, res) => {
  const body = req.body;
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const checkToken = jwt.verify(token, `key-test`);
    if (checkToken.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }
    await foodCategoryModel.create({
      categoryName: body.categoryName,
    });
    res.json("succesfully added");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed" });
  }
};
