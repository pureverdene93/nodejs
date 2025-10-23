import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Objectid = Schema.ObjectId;

const AuthSchema = new Schema({
  id: Objectid,
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: {
    type: Objectid,
    ref: `foodCategory`,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const authModel = mongoose.model(`food`, AuthSchema);
