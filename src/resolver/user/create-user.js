import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const create = req.body;
  const password = create.password;
  const hashedPassword = await bcrypt.hash(password, 10);

  await userModel.create({
    email: create.email,
    password: hashedPassword,
    phoneNumber: create.phoneNumber,
    adress: create.adress,
    role: create.role,
    orderedFoods: create.orderedFoods,
    ttl: create.ttl,
    isVerified: create.isVerified,
    createdAt: create.createdAt,
    updatedAt: create.updatedAt,
  });
  res.json("succesfully added");
};
