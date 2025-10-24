import { authModel } from "../../model/auth-model.js";

export const foodPatch = async (req, res) => {
  const creating = req.body;
  await authModel.findByIdAndUpdate(req.params.id, {
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
};
