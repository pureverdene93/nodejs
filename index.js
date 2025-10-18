import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());

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

app.get(`/users`, (req, res) => {
  res.json(users);
});

app.post(`/users`, (req, res) => {
  const addNewUser = req.body;
  users.push(addNewUser);
  res.status(201).json("New user succesfully added.");
});

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

app.put(`/users`, (req, res) => {
  const { id, username, phone } = req.body;
  const findUserId = users.find((user) => user.id === id);

  if (!findUserId) {
    return res.status(404).json("Couldn't found this user");
  }
  if (username) {
    findUserId.username = username;
  }
  if (phone) {
    findUserId.phone = phone;
  }
  res.status(200).json("Succesfully updated");
});

app.delete(`/users`, (req, res) => {
  const { id } = req.body;
  const findUserId = users.findIndex((user) => user.id === id);

  if (findUserId === -1) {
    return res.status(404).json("Couldn't delete");
  }

  users.splice(findUserId, 1);

  res.status(200).json("Succesfully deleted");
});

app.listen(PORT, () => {
  console.log(`Server is running this port http://localhost:${PORT}/users`);
});
