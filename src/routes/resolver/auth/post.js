import { authModel } from "../../../model/auth-model.js";

export const post = async (req, res) => {
  const creating = req.body;
  await authModel.create({
    foodName: creating.foodName,
    price: creating.price,
    image: creating.image,
    ingredients: creating.ingredients,
    category: creating.category,
    createdAt: creating.createdAt,
    updatedAt: creating.updatedAt,
  });
  res.status(201).json("New user succesfully added.");
};
