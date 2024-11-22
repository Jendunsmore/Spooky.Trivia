// Spooky Trivia/Backend/server.js
// Server | Express Backend
//   -Mongoose|MongoDB|Express|CORs|dotenv|

// Imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import the added route(s)
import questionRoutes from './routes/questionRoutes.mjs';
import factRoutes from './routes/factRoutes.mjs';
import scoreRoutes from './routes/scoreRoutes.mjs';

// Setup | Load environment variables
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
});

// Middleware
app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: 'Internal Server Error'});
});

// Routes
app.use('/api/questions', questionRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/facts', factRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
});
