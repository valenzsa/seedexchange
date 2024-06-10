import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (request, response) => {
  const products = await Product.find({});
  response.json(products);
});

const getProductById = asyncHandler(async (request, response) => {
  const product = await Product.findById(request.params.id);

  if (product) {
    return response.json(product);
  } else {
    response.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductById };
