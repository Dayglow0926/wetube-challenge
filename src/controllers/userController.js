export const usersPage = (req, res) => {
  return res.send(`<h1 style='color:orange'>Welcome to UsersPage</h1>`);
};
export const userViewPage = (req, res) => {
  const { id } = req.params;
  return res.send(`<h1 style='color:orange'>Hello ${id}</h1>`);
};
export const userEditPage = (req, res) => {
  return res.send(`<h1 style='color:orange'>Welcome to UserEditPage</h1>`);
};
