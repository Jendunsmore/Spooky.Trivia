// server.mjs
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import usersRoutes from './routes/usersRoutes.mjs';
import scoresRoutes from './routes/scoresRoutes.mjs';
import questionsRoutes from './routes/questionsRoutes.mjs';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// API routes
app.use('/users', usersRoutes);
app.use('/scores', scoresRoutes);
app.use('/questions', questionsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
