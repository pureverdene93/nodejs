export const post = (req, res) => {
  const addNewUser = req.body;
  users.push(addNewUser);
  res.status(201).json("New user succesfully added.");
};
