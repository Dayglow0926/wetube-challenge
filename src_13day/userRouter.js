import express from "express";
import { home, getLogin, postLogin, getJoin, postJoin } from "./userController";

const userRouter = express.Router();

// Add your magic here!
userRouter.get("/", home);
userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.route("/join").get(getJoin).post(postJoin);

export default userRouter;
