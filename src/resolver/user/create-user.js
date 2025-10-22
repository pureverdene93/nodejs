import { userModel } from "../../model/user-model.js";

export const createUser = async (req, res) => {
  const create = req.body;
  await userModel.create({
    email: create.email,
    password: create.password,
    phoneNumber: create.phoneNumber,
    adress: create.adress,
    role: create.role,
    orderedFoods: create.orderedFoods,
    ttl: create.ttl,
    isVerified: create.isVerified,
    updatedAt: create.updatedAt,
  });
  res.json("succesfully added");
};
