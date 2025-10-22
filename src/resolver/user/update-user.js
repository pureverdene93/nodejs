import { userModel } from "../../model/user-model.js";

export const updateUser = async (req, res) => {
  const create = req.body;
  await userModel.findByIdAndUpdate(
    create.id,
    {
      $set: {
        email: create.email,
        password: create.password,
        phoneNumber: create.phoneNumber,
        adress: create.adress,
        role: create.role,
        orderedFoods: create.orderedFoods,
        ttl: create.ttl,
        isVerified: create.isVerified,
        updatedAt: create.updatedAt,
      },
    },
    { new: true }
  );
  res.json("succesfully updated");
};
