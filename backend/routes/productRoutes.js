import express from "express";
import Product from "../models/productModels.js";
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

productRouter.get("/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});
productRouter.get("/newProduct/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

export default productRouter;
