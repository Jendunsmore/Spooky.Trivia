// Spooky Trivia/Backend/server.js
// Server | Express Backend
//   -Mongoose|MongoDB|Express|CORs|dotenv|

// Imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Setup | Load environment variables
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();


// DB Connection
mongoose.connect(process.env.MONGO_URL); // MONGO URL goes here!!!!


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('api/users', userRoutes);
app.use('/api/auth', authRoutes);

// API Route

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
});
