import express from "express";
import { router } from "./routes/auth.js";
import mongoose from "mongoose";

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(`/auth`, router);

mongoose
  .connect(
    `mongodb+srv://pureverdene:purevee12@fooddeliveryweb.zdxevbf.mongodb.net/`
  )
  .then(() => console.log("Succesfuly connected"));
app.listen(PORT, () => {
  console.log(`Server is running this port http://localhost:${PORT}/auth`);
});
