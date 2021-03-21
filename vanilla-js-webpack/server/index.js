var express = require("express");
var path = require("path");

const app = new express();

app.use("/static", express.static("vanilla-js-webpack/dist/js"));

app.get("/favicon.ico", (req, res, next) => {
  return res.sendFile(path.resolve(__dirname, "../../assets/p-favicon.ico"));
});

app.get("*", (req, res, next) => {
  return res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.listen(8080, () => {
  console.log("running...");
});
