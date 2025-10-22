import express from "express";
import { getFoodOrder } from "./get-foodOrder.js";
import { createOrder } from "./createOrder.js";

export const foodOrderRoute = express.Router();
foodOrderRoute.get(`/`, getFoodOrder);
foodOrderRoute.post(`/`, createOrder);
