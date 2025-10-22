import express from "express";
import { put } from "./put.js";
import { deleted } from "./delete.js";
import { post } from "./post.js";
import { get } from "./get.js";

// app.put(`/users/:id`, (req, res) => {
//   const userId = parseInt(req.params.id);
//   const { username, phone } = req.body;
//   const findUserId = users.findIndex((users) => users.id === userId);
//   if (findUserId === -1) {
//     return res.status(404).json("Can't find user");
//   }
//   users[findUserId] = { id: userId, username, phone };
//   res.status(200).json("User data succesfully updated");
// });

export const router = express.Router();
router.get(`/`, get);
router.post(`/`, post);
router.put(`/`, put);
router.delete(`/`, deleted);
