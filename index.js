import express from "express";

const app = express();
const PORT = 8002;
app.use(express.json());

const users = [
  {
    id: "1",
    username: "John",
    phone: "99009900",
  },
  {
    id: "2",
    username: "Bob",
    phone: "99112233",
  },
];

app.get(`/users`, (req, res) => {
  res.json(users);
});

app.post(`/users`, (req, res) => {
  const newUser = req.body;
  newUser.id = String(users.length + 1);
  users.push(newUser);
  // res.status(201).json();
});

app.listen(PORT, () => {
  console.log(`Server is running this port http://localhost:${PORT}/users`);
});
