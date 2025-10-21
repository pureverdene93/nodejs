import { authModel } from "../../../model/auth-model.js";
export const put = async (req, res) => {
  const creating = req.body;
  await authModel.findByIdAndUpdate(
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
  // const { id, username, phone } = req.body;
  // const findUserId = users.find((user) => user.id === id);

  // if (!findUserId) {
  //   return res.status(404).json("Couldn't found this user");
  // }
  // if (username) {
  //   findUserId.username = username;
  // }
  // if (phone) {
  //   findUserId.phone = phone;
  // }
  res.status(200).json("Succesfully updated");
};
