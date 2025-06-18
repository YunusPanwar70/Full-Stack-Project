import express from 'express';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/product.controller.js';
import { requireSignIn, isAdmin } from '../middlewares/auth.middleware.js';
import formidable from 'express-formidable';

const router = express.Router();

// routes
router.post('/create-product', requireSignIn, isAdmin, createProductController, formidable());

router.put('/create-product', requireSignIn, isAdmin, updateProductController, formidable());

// Get All Products
router.get("/get-product", getProductController);

// Get Single Product
router.get("/get-product/:slug", getSingleProductController);

// Get Photo
router.get("/product-photo/:pid", productPhotoController);

// Delete Product Controller
router.get("/product/:pid", deleteProductController);

export default router;