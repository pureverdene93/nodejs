import express from "express";
import { getCategory } from "./get-category.js";
import { createCategory } from "./create-category.js";
import { updateCategory } from "./update-category.js";
import { deleteCategory } from "./delete-category.js";

export const categoryRouter = express.Router();
categoryRouter.get(`/`, getCategory);
categoryRouter.post(`/`, createCategory);
categoryRouter.put(`/`, updateCategory);
categoryRouter.delete(`/`, deleteCategory);
