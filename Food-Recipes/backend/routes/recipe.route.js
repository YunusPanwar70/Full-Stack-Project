import express from 'express';
import { getRecipes, getRecipe, addRecipes, editRecipe, deleteRecipe } from '../controller/recipes.controller.js';
const router = express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/', addRecipes);
router.put('/:id', editRecipe);
router.delete('/:id', deleteRecipe);

export default router;