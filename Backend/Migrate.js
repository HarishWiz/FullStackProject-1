import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./Models/Category.js";
import Product from "./Models/Product.js";
import fs from "fs";

dotenv.config();

const productsData = JSON.parse(fs.readFileSync("./data/products.json","utf-8"))
const categoriesData = JSON.parse(fs.readFileSync("./data/categories.json","utf-8"))
const insertData = async () => {
 try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Category.deleteMany({});
    await Product.deleteMany({});
    console.log("Existing categories and products cleared");

    // Insert categories
    const categories = await Category.insertMany(categoriesData);
    console.log("Categories inserted:", categories.length);

    // Create category map, normalizing spaces and hyphens
    const categoryMap = categories.reduce((map, category) => {
      const key = category.name.toLowerCase().replace(/[\s-]+/g, "_");
      map[key] = category._id;
      return map;
    }, {});
    console.log("Category map:", categoryMap);

    // Update products with actual category ObjectIds
    const updatedProducts = productsData.map((product, index) => {
      const match = product.category.match(/category_id_(.+?)'/);
      if (!match || !match[1] || !categoryMap[match[1]]) {
        console.error(`Invalid category for product ${product.name} at index ${index}: ${product.category}`);
        throw new Error(`Invalid category for product ${product.name}`);
      }
      return {
        ...product,
        category: categoryMap[match[1]],
      };
    });

    // Insert products
    await Product.insertMany(updatedProducts);
    console.log("Products inserted:", updatedProducts.length);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
};

insertData()