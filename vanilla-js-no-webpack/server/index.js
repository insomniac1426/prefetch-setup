var express = require("express");
var path = require("path");

const app = new express();

app.use("/static", express.static("vanilla-js-no-webpack/client/public"));

app.get("/favicon.ico", (req, res, next) => {
  return res.sendFile(path.resolve(__dirname, "../../assets/p-favicon.ico"));
});

app.get("*", (req, res, next) => {
  return res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.listen(8080, () => {
  console.log("running...");
});
