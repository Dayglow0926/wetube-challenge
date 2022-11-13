import "./db.js";
import "./models/Movie.js";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter.js";
import { localsMiddleware } from "./middlewares.js";

const app = express();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(4003, () => console.log(`✅  Server Ready!`));
