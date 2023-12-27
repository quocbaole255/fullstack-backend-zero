const express = require("express");
const path = require("path");
require("dotenv").config();

console.log(">>> check env:", process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs"); // "My Site"

// config static files
app.use(express.static(path.join(__dirname, "public")));

// Khai bao route
app.get("/", (req, res) => {
  res.send("Hello World! it's me quoc bao & nodemon");
});

app.get("/hoidanit", (req, res) => {
  // res.send("<h1>Hoi dan it</h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
