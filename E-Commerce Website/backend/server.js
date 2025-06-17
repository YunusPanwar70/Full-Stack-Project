import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/auth.route.js';
import cors from 'cors';
// configure env 
dotenv.config();

// database config
connectDB();

// rest Object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/api', (req, res) => {
    res.send("<h1>Welcome</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});