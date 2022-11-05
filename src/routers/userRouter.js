import express from "express";
import {
  usersPage,
  userViewPage,
  userEditPage,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/edit-profile", userEditPage);
userRouter.get("/:id", userViewPage);
userRouter.get("/", usersPage);

export default userRouter;
