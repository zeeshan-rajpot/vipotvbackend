const express = require("express");
const cors = require("cors");
const path = require("path");
const channelRoutes = require("./routes/channelRoutes");

const app = express();

// CORS configuration for allowing all origins
const corsOptions = {
  origin: "*",  // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"],  // Allowed headers
};

// Enable CORS with the options
app.use(cors(corsOptions));

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files (if necessary)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use routes
app.use("/api", channelRoutes);

// Home route
app.get("/", (req, res) => {
  res.json("Welcome to vipotv API!");
});

// Export the app for Vercel (important for serverless functions)
module.exports = app;

// For development, you can still use app.listen() locally (commented out for production):
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
