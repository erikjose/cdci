const express = require("express");
const server = express();

server.get("/", (req, res) => res.send("ok"));

server.listen(3001, () => {
  console.log("Servidor iniciado");
});
