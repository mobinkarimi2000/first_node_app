const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("help");
  next(); // this allow the request to the next middleware
});
app.use((req, res, next) => {
  res.send("<h1> Hello form express </h1>");
});

const server = http.createServer(app);

server.listen(3000);
