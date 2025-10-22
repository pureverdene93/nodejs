import express from "express";
import mongoose from "mongoose";
import { router } from "./resolver/auth/auth.js";
import { categoryRouter } from "./resolver/foodCategory/category.js";
import { userRoute } from "./resolver/user/user.js";
import { foodOrderRoute } from "./resolver/foodOrder/foodOrder.js";

const app = express();
const PORT = 8000;
app.use(express.json());

app.use(`/food`, router);
app.use(`/category`, categoryRouter);
app.use(`/user`, userRoute);
app.use(`/order`, foodOrderRoute);

mongoose
  .connect(
    `mongodb+srv://pureverdene:purevee12@fooddeliveryweb.zdxevbf.mongodb.net/`
  )
  .then(() => console.log("Succesfuly connected"));
app.listen(PORT, () => {
  console.log(`Server is running this port http://localhost:${PORT}`);
});
