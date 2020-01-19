"use strict";

const express = require("express");

// Constants
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";
// App
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const json = JSON.stringify({ JSONfield: "test" });

app.get("/get/", (req, res, next) => {
  res.send("GET");
});

app.get("/", (req, res) => {
  res.send("Hello World\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

//docker run -p 49160:8080 -d node-web-app
