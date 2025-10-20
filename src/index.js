import express from "express";
import { router } from "./routes/auth.js";
import mongoose from "mongoose";

const app = express();
const PORT = 8001;
app.use(express.json());
app.use(`/auth`, router);

mongoose
  .connect(
    `mongodb+srv://pureverdene:purev12@fooddeliveryweb.zdxevbf.mongodb.net/`
  )
  .then(() => console.log("MongoDB running"));
app.listen(PORT, () => {
  console.log(`Server is running this port http://localhost:${PORT}/users`);
});
