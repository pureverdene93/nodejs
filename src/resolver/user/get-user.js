import { userModel } from "../../model/user-model.js";

export const getUser = async (req, res) => {
  const userDB = await userModel.find().populate({
    path: "orderedFoods",
    populate: {
      path: "foodOrderItem.food",
    },
  });

  console.log(userDB);
  res.json(userDB, "succesfully");
};
