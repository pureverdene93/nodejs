import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodOrderSchema = new Schema({
  id: ObjectId,
  user: ObjectId,
  totalPrice: Number,
  foodOrderItems: {
    type: String,
    enum: ["pending", "canceled", "delivered"],
    default: "pending",
  },
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

export const foodOrderModel = mongoose.model("foodOrder", foodOrderSchema);
