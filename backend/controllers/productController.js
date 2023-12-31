import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

/**
 * @desc 		Get all products
 * @route		GET /api/products
 * @access	public
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/**
 * @desc 		Get single products
 * @route		GET /api/products/:id
 * @access	public
 */
const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export { getProductById, getProducts };
