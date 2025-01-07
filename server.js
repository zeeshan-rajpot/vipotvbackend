const express = require("express");
const cors = require("cors");
const path = require("path");
const channelRoutes = require("./routes/channelRoutes");

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use routes
app.use("/api", channelRoutes);

app.get("/", (req, res) => {
    res.json("Welcome to vipotv api!");
  });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
