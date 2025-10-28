import { foodModel } from "../../model/food-model.js";

export const put = async (req, res) => {
  const creating = req.body;
  await foodModel.findByIdAndUpdate(
    creating.id,
    {
      $set: {
        foodName: creating.foodName,
        price: creating.price,
        image: creating.image,
        ingredients: creating.ingredients,
        category: creating.category,
        createdAt: creating.createdAt,
        updatedAt: creating.updatedAt,
      },
    },
    { new: true }
  );

  res.status(200).json("Succesfully updated");
};
