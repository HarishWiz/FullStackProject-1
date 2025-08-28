import express from "express";
import Product from "../Models/Product.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { category, type } = req.query;
    const query = {};
    if (category) query.category = category;
    if (type) query.type = type;
    const products = await Product.find(query).populate("category");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add reviews to product

router.post("/:id/reviews", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(400).json({ message: "Product not found" });
    Product.reviwes.push(req.body);
    // Calculating Average Rating
    const totalStarts = product.reviews.reduce(
      (sum, review) => sum + review.stars,
      0
    );
    product.rating = Number((totalStarts / product.reviews.length).toFixed(1));
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
