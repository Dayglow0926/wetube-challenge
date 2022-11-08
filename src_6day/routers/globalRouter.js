import express from "express";
import {
  home,
  trending,
  newStories,
} from "../controllers/storiesController.js";
import { join, login } from "../controllers/usersController.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newStories);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
