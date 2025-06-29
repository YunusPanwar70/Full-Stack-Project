import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instRuctions: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    coverImage: {
        type: String
    },
}, { timestamps: true });
const Recipes = mongoose.model('Recipes', recipeSchema);
export default Recipes;