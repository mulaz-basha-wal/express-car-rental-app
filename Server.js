const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/addcar", (req, res) => {
  res.sendFile(path.join(__dirname, "addcar.html"));
});
app.get("/show_cars", (req, res) => {
  res.sendFile(path.join(__dirname, "show_cars.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});
app.listen(3001);
console.log("Started Running...");
