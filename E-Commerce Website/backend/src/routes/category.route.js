import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/auth.middleware.js';
import { createCategoryController, updateCategoryController, categoryController, singleCategoryController, deleteCategoryController } from '../controllers/category.controller.js';
const router = express.Router();

// Routes
// Create Category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

// update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

// GetAll Category
router.get("/get-category", categoryController);

// Single Category
router.get("/single-category/:slug", singleCategoryController);

// Delete Category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController);

export default router;