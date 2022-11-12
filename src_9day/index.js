import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(bodyParser.urlencoded({ extended: true }));

// Codesanbox does not need PORT :)
app.listen(() => console.log(`✅  Server Ready!`));
