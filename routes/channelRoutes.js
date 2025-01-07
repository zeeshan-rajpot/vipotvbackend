const express = require("express");
const router = express.Router();
const { getAllChannels } = require("../controllers/channelController");
// const multer = require("multer");
const path = require("path");

// Set up multer for file uploads
// const uploadDir = path.join(__dirname, "../uploads");
// const upload = multer({
//   dest: uploadDir,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB size limit
// });

// Define routes
router.get("/allChannels", getAllChannels); // GET all channels
// router.post("/channels", upload.single("image"), addChannel); // POST a new channel

module.exports = router;
