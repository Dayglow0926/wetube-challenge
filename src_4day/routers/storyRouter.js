import express from "express";
import {
  storiesPage,
  storiesEditPage,
  storiesDeletePage,
} from "../controllers/storyController.js";

const storyRouter = express.Router();

storyRouter.get("/:id/edit", storiesEditPage);
storyRouter.get("/:id/delete", storiesDeletePage);
storyRouter.get("/:id", storiesPage);

export default storyRouter;
