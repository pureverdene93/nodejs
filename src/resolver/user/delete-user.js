import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const checkToken = jwt.verify(token, `key-test`);
    console.log(checkToken);
    if (checkToken.role === "admin") {
      await userModel.findByIdAndDelete(req.params.id);
      res.json("succesfully deleted");
    }
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized");
  }
};
