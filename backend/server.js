import express from "express";
import Data from "./Data.js";

const app = express();

app.get("/api/products/:id", (req, res) => {
  const product = Data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});
app.get("/api/products", (req, res) => {
  res.send(Data.products);
});
app.get("/", (req, res) => {
  res.send("Server is ready");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
