import express from "express";
import { home, read, readFile } from "./fileController";
import { uplaodFiles } from "./fileMiddleware";

const fileRouter = express.Router();

fileRouter.get("/", home);
fileRouter.route("/read").post(uplaodFiles.single("upload"), read);
fileRouter.get("/read/:id", readFile);

export default fileRouter;
