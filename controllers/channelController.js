const fs = require("fs");
const path = require("path");

// Path to the data file
const dataFilePath = path.join(__dirname, "../data/tv_data.json");

// Helper function to read JSON data
const readDataFile = () => {
  if (fs.existsSync(dataFilePath)) {
    return JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
  }
  return { Channels: [] };
};

// Helper function to write JSON data
const writeDataFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// GET all channels
const getAllChannels = (req, res) => {
  try {
    const data = readDataFile();
    res.json(data.Channels);
  } catch (error) {
    res.status(500).json({ message: "Error reading data file.", error });
  }
};

// POST a new channel
// const addChannel = (req, res) => {
//   try {
//     const { channel_name, description, category, country, country_flag, language, iframe_url, tags } = req.body;

//     // Validate required fields
//     if (!channel_name) {
//       return res.status(400).json({ message: "Channel name is required." });
//     }

//     // Read existing data
//     const existingData = readDataFile();

//     // Check for duplicate channel names
//     if (existingData.Channels.some((channel) => channel.channel_name === channel_name)) {
//       return res.status(400).json({ message: "A channel with this name already exists." });
//     }

//     // Handle file upload
//     let imageUrl = "";
//     if (req.file) {
//       const fileExt = path.extname(req.file.originalname);
//       const newFileName = `${Date.now()}${fileExt}`;
//       const newFilePath = path.join(uploadDir, newFileName);

//       // Rename and move uploaded file
//       fs.renameSync(req.file.path, newFilePath);
//       imageUrl = `${req.protocol}://${req.get("host")}/uploads/${newFileName}`;
//     }

//     // Create new channel data
//     const newChannel = {
//       id: String(existingData.Channels.length + 1),
//       channel_name,
//       description: description || "",
//       category: category || "",
//       country: country || "",
//       country_flag: country_flag || "",
//       language: language || "",
//       iframe_url: iframe_url || "",
//       tags: tags || "",
//       image: imageUrl,
//     };

//     // Append new channel and save
//     existingData.Channels.push(newChannel);
//     writeDataFile(existingData);

//     res.json({ message: "Channel added successfully.", channel: newChannel });
//   } catch (error) {
//     res.status(500).json({ message: "Error saving channel data.", error });
//   }
// };

module.exports = { getAllChannels };
