import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  email: String,
  password: String,
  phoneNumber: String,
  adress: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
  orderedFoods: String,
  ttl: Date,
  isVerified: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

export const userModel = mongoose.model("user", UserSchema);
