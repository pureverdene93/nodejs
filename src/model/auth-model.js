import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Objectid = Schema.ObjectId;

const AuthSchema = new Schema({
  id: Number,
  Name: String,
  Email: Number,
});

