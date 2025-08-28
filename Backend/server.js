import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./Routes/authRoutes.js";
import categoryRoutes from "./Routes/categoryRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
    credentials: true,
  })
);
app.use(express.json());

app.use("/images", express.static("images"))

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected successfully "))
  .catch((err) => console.log("mongodb Failed to connect", err));

app.use("/api", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API running successfully");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
