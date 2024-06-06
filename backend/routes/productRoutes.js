import express from 'express';
import products from "../data/products.js";

const router = express.Router();

router.get("/", (request, response) => {
  response.json(products);
});

router.get("/:id", (request, response) => {
  let product = products.find((product) => product.id === request.params.id);
  response.json(product);
});

export default router;