import express from "express";
import {
  home,
  movieDetail,
  getAddMovie,
  postAddMovie,
} from "./movieController.js";

const movieRouter = express.Router();

// create the '/' route
movieRouter.get("/", home);
// create the /add route (GET + POST)
movieRouter.route("/add").get(getAddMovie).post(postAddMovie);
// create the /:id route
movieRouter.get("/:id", movieDetail);

export default movieRouter;
