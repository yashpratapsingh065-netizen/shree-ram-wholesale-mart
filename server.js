const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const publicFolder = path.join(__dirname, "public");

app.use(express.static(publicFolder));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicFolder, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Shree Ram Wholesale Mart running on port ${PORT}`);
});
