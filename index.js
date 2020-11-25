const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
