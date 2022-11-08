import express from "express";
import globalRouter from "./routers/globalRouter.js";
import storyRouter from "./routers/storyRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const PORT = 4003;

app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/stories", storyRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
