import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Objectid = Schema.ObjectId;

const AuthSchema = new Schema({
  id: Objectid,
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: Objectid,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

export const authModel = mongoose.model("food", AuthSchema);
