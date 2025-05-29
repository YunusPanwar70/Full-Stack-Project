const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});