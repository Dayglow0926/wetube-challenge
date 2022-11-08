export const join = (req, res) => res.render("user", { pageTitle: "join" });
export const login = (req, res) => res.render("user", { pageTitle: "login" });
export const seeUsers = (req, res) =>
  res.render("user", { pageTitle: "seeUsers" });
export const seeUser = (req, res) =>
  res.render("user", { pageTitle: "seeUser", id: req.params.id });
export const editProfile = (req, res) =>
  res.render("user", { pageTitle: "editProfile" });
