const express = require("express");
const app = express();
const port = process.env.PORT || 8888

const produtos = require("./produtos.json")

app.get("/", (req, res) => {
  res.send(produtos)
});

app.listen(port, () => {
  console.info("servidor está funcionando")
})
