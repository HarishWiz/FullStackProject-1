import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userName: String,
  comment: String,
  stars: { type: Number, min: 1, max: 5 },
  date: {
    type: Date,
    default: Date.now,
  },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: { type: Number, required: true, min: 0 },
  discount: { type: Number, default: 0, min: 0 },
  image: String,
  ingredients: [String],
  type: String,
  isAvailable: { type: Boolean, default: true },
  rating: { type: Number, min: 0, max: 5 },
  reviews: [reviewSchema],
  customFields: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
