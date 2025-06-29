import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';

// Routes
import recipeRoutes from './routes/recipe.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use('/recipe', recipeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});