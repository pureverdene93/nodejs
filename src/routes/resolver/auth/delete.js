export const deleted = (req, res) => {
  const { id } = req.body;
  const findUserId = users.findIndex((user) => user.id === id);

  if (findUserId === -1) {
    return res.status(404).json("Couldn't delete");
  }

  users.splice(findUserId, 1);

  res.status(200).json("Succesfully deleted");
};
