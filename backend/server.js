import express from "express";
import Data from "./Data.js";

const app = express();

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
