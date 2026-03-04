const express = require("express");
//Imports the Express framework
//Express helps you create APIs and handle HTTP requests (GET, POST, etc.)

const mongoose = require("mongoose");
//Imports Mongoose
//Mongoose helps Node.js communicate with MongoDB
//It allows you to create schemas and models

const dotenv = require("dotenv");
//Imports dotenv
//dotenv loads environment variables from .env file into process.env

const cors = require("cors");
//Imports CORS middleware
//Allows frontend apps (like your Flutter app) to access your backend


// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
//Enables Cross-Origin Resource Sharing
//Allows frontend (e.g., localhost:3000) to call backend (localhost:5000)

app.use(express.json()); // Parse JSON body
//Parses incoming JSON request bodies
//Required for POST/PUT APIs

const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "CampusConnect API is running 🚀",
  });
});

// Async function to connect DB and start server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");

    // Start Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });

  } catch (error) {
    console.error("Database connection failed ❌");
    console.error(error.message);
    process.exit(1); // Stop server if DB fails
  }
};
// Call function
startServer();

