/*
You DONT have to import the User with your username.
Because it's a default export we can nickname it whatever we want.
So import User from "./models"; will work!
You can do User.find() or whatever you need like normal!
*/
import User from "./models/User";
import bcrypt from "bcrypt";

// Add your magic here!
export const home = async (req, res) => {
  console.log(req.session.loggedIn);
  if (!req.session.loggedIn) {
    res.redirect("/login");
  }

  return res.render("home", {
    pageTitle: "Home!",
    user: req.session.user,
  });
};

export const getLogin = async (req, res) => {
  console.log(await User.find({}));
  res.render("login", { pageTitle: "Login!" });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "로그인 정보를 확인하지못했습니다. ",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "비밀번호가 틀렸습니다.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join!" });
};

export const postJoin = async (req, res) => {
  const { name, username, password, password2 } = req.body;
  const pageTitle = "Join!";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "비밀번호가 일치하지 않습니다.",
    });
  }

  const exists = await User.exists({ username });

  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "이미 사용 중인 사용자이름입니다.",
    });
  }

  try {
    await User.create({
      name,
      username,
      password,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
