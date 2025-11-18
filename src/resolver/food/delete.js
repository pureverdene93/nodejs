import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";

export const deleted = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const checkToken = jwt.verify(token, `key-test`);
    if (checkToken.role === "admin") {
      await foodModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Succesfully deleted");
    }
  } catch (err) {
    console.log("this is server error", err);
    res.status(500).json("failed");
  }
};
