const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "data.txt");

app.get("/api/test", (req, res) => {
  res.json({ message: "Node connected to React successfully" });
});

app.post("/api/create", (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  fs.writeFile(filePath, text, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to write file" });
    }
    res.json({ message: "File created successfully" });
  });
});

app.get("/api/read", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(404).json({ error: "File not found" });
    }
    res.json({ text: data });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
