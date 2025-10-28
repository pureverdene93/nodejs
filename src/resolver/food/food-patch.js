import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";

export const foodPatch = async (req, res) => {
  const creating = req.body;
  const token = req.headers.authorization;

  try {
    const checkToken = jwt.verify(token, `key-test`);
    if (checkToken.role === "admin") {
      await foodModel.findByIdAndUpdate(req.params.id, {
        $set: {
          foodName: creating.foodName,
          price: creating.price,
          image: creating.image,
          ingredients: creating.ingredients,
          category: creating.category,
          createdAt: creating.createdAt,
          updatedAt: creating.updatedAt,
        },
      });
      res.json("succesfully");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("Failed");
  }
};
