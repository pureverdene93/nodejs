import express from "express";
import { getFoodOrder } from "./get-foodOrder.js";
import { createOrder } from "./createOrder.js";
import { updateFoodOrder } from "./updateFoodOrder.js";
import { deleteOrder } from "./delete-foodOrder.js";

export const foodOrderRoute = express.Router();
foodOrderRoute.get(`/`, getFoodOrder);
foodOrderRoute.post(`/`, createOrder);
foodOrderRoute.put(`/`, updateFoodOrder);
foodOrderRoute.delete(`/`, deleteOrder);
