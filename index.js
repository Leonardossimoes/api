const express = require("express");
const app = express();
const port = process.env.PORT || 8888

const produtos = require("./produtos.json")

app.get("/produtos", (req, res) => {
  return res.json("produtos")
});

app.listen(port, () => {
  console.log("servidor está funcionando")
})