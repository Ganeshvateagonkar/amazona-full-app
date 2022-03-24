import express from "express";
const app = express();
import data from "./data.js";

app.get("/api/products/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});
app.get("/api/products", (req, res) => {
  res.json(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
