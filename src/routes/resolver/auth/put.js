export const put = (req, res) => {
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
};
