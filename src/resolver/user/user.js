import express from "express";
import { getUser } from "./get-user.js";
import { createUser } from "./create-user.js";
import { updateUser } from "./update-user.js";
import { deleteUser } from "./delete-user.js";
import { login } from "./user-login.js";

export const userRoute = express.Router();

userRoute.get(`/`, getUser);
userRoute.post(`/signUp`, createUser);
userRoute.put(`/`, updateUser);
userRoute.delete(`/:id`, deleteUser);
userRoute.post(`/signIn`, login);
