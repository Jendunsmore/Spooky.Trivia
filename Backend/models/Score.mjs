import mongoose from 'mongoose';

// Schema for user scores
const scoreSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
        default: 0.
    },
    date: {
        type: Date,
        default: Date.now, // current date set automatically
    },
});

// Create and export Score model
const Score = mongoose.model('Score', scoreSchema);
export default Score;
