import { userList } from "../models/user.models.js";

export function handleUser(req, res) {
  const userData = userList();
  console.log(userData[2]);
  res.render("user", { users: userData });
}
