// db/conn.mjs
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const connectionString = process.env.MONGO_URI;

export default async function connectDB() {
    try {
        await mongoose.connect(connectionString);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1); // Exit with error code
    }
}
