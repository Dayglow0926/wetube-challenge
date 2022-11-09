import express from "express";
import path from "path";
import "./db.js";
import movieRouter from "./movieRouter.js";

const app = express();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(4003, () => console.log(`✅  Server Ready!`));
