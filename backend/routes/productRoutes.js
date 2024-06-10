import express from "express";
//import products from "../data/products.js";

const router = express.Router();

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

router.get(
  "/",
  asyncHandler(async (request, response) => {
    const products = await Product.find({});
    response.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (request, response) => {
    // let product = products.find((product) => product.id === request.params.id);
    const product = await Product.findById(request.params.id);

    if (product) {
      return response.json(product);
    }

    response.status(404).json({ message: "Product not found" });
  })
);

export default router;
