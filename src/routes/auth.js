import express from "express";
import { get } from "./resolver/auth/get.js";
import { post } from "./resolver/auth/post.js";
import { put } from "./resolver/auth/put.js";
import { deleted } from "./resolver/auth/delete.js";

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

const users = [
  {
    id: 1,
    username: "John",
    phone: "99009900",
  },
  {
    id: 2,
    username: "Bob",
    phone: "99112233",
  },
];

router.get(`/`, get);

router.post(`/`, post);

router.put(`/`, put);

router.delete(`/`, deleted);
