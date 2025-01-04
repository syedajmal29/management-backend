import express from "express";
import cors from "cors";
import connectDB from "./database/db.js";
import Branch from "./router/Branchrouter.js";
import auth from "./router/auth.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/branch", Branch);
app.use("/auth", auth);

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "API is Working" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
