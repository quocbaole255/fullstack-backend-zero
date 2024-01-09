require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

console.log(">>> check env:", process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine
configViewEngine(app);

// Khai bao route

app.use("/", webRoutes);

// test connection

// simple query
// connection.query("select * from Users u", function (err, results, fields) {
//   console.log(">>>>results=", results); // results contains rows returned by server
//   console.log(">>field=", fields); // fields contains extra meta data about results, if available
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
