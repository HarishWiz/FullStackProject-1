import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./Routes/authRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected successfully "))
  .catch((err) => console.log("mongodb Failed to connect", err));

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("API running successfully");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
