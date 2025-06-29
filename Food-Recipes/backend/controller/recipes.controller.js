import Recipes from '../models/recipe.model.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cd(null, './public/images');
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + file / fieldname;
    }

});

const upload = multer({ storage: storage });

export const getRecipes = async (req, res) => {
    const recipes = await Recipes.find();
    return res.json(recipes);
};

export const getRecipe = async (req, res) => {
    const recipe = await Recipes.findById(req.params.id);
    res.json(recipe);
};

export const addRecipes = async (req, res) => {
    console.log(req.user);
    const { title, ingredients, instRuctions, time } = req.body;

    if (!title || !ingredients || !instRuctions) {
        res.json({ message: 'Required field cannot be empty' });
    }

    const newRecipe = await Recipes.create({
        title, ingredients, instRuctions, time, coverImage: req.file.filename
    });

    res.status(201).json({
        message: "Recipe added successfully",
        data: newRecipe
    });
};

export const editRecipe = async (req, res) => {
    const { title, ingredients, instRuctions, time } = req.body;
    let recipe = await Recipes.findById(req.params.id);
    try {
        if (recipe) {
            let coverImage = req.file?.filename ? req.file?.filename : recipe.coverImage;
            await Recipes.findByIdAndUpdate(req.params.id, { ...req.body, coverImage }, { new: true });
            res.json({ title, ingredients, instRuctions, time });
        }
    } catch (error) {
        return res.status(404).json({ message: 'Error in edit recipe' });
    }
};

export const deleteRecipe = async (req, res) => {
    try {
        await Recipes.deleteOne({ _id: req.params.id });
        res.json({ Status: 'OK' });
    } catch (error) {
        return res.status(400).json({ message: 'error' });
    }
};