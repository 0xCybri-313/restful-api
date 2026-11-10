const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Server is running successfully");
});
