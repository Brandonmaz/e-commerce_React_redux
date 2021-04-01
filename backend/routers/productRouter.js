import express from "express";
import Data from "../Data.js";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const products = await Product.find({});
      res.send(products);
    } catch (error) {
      res.send("You might have an error");
      console.log(error);
    }
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    try {
      const createdProducts = await Product.insertMany(Data.products);
      res.send({ createdProducts });
    } catch (error) {
      res.send("You have an error");
      console.log(error);
    }
  })
);
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: "Product Not Found" });
      }
    } catch (error) {
      res.send("Yeah! you have an error");
    }
  })
);
export default productRouter;
