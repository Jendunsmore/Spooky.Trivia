import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/usersSchema.mjs';
import Score from './models/scoresSchema.mjs';
import { users, scores } from './data.mjs';

dotenv.config();

const seedDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.mongoURI);
        console.log('MongoDB Connected...');

        // Clear existing collections
        await User.deleteMany();
        console.log('Cleared users collection.');

        await Score.deleteMany();
        console.log('Cleared scores collection.');

        // Insert users
        const insertedUsers = await User.insertMany(users);
        console.log('Inserted Users:', insertedUsers);

        // Dynamically assign userId to scores
        const updatedScores = scores.map((score, index) => ({
            ...score,
            userId: insertedUsers[index % insertedUsers.length]._id, // Assign userId cyclically
        }));

        // Insert scores
        const insertedScores = await Score.insertMany(updatedScores);
        console.log('Inserted Scores:', insertedScores);

        console.log('Database seeding completed successfully.');
        process.exit();
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
};

seedDB();
