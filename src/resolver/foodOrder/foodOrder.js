import express from "express";
import { getFoodOrder } from "./get-foodOrder.js";
import { createOrder } from "./createOrder.js";
import { updateFoodOrder } from "./updateFoodOrder.js";
import { deleteOrder } from "./delete-foodOrder.js";
import { getFoodOrderByUsedrId } from "./foodOrder-userId.js";

export const foodOrderRoute = express.Router();
foodOrderRoute.get(`/`, getFoodOrder);
foodOrderRoute.post(`/`, createOrder);
foodOrderRoute.put(`/:id`, updateFoodOrder);
foodOrderRoute.delete(`/`, deleteOrder);
foodOrderRoute.get(`/:id`, getFoodOrderByUsedrId);
