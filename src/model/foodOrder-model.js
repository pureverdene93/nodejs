import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodOrderSchema = new Schema({
  id: ObjectId,
  user: { type: ObjectId, ref: `user` },
  totalPrice: Number,
  foodOrderItem: [{ food: { type: ObjectId, ref: `food` }, quantity: Number }],
  status: {
    type: String,
    enum: ["pending", "canceled", "delivered"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const foodOrderModel = mongoose.model("foodOrder", foodOrderSchema);
