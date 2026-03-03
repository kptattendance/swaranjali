import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import galleryRoutes from "./routes/galleryRoutes.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Swaranjali Backend API Running...");
});

const PORT = process.env.PORT || 5000;

app.use("/api/gallery", galleryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
