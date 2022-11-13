import express from "express";
import { home } from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);

export default movieRouter;
