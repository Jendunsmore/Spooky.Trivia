// models/questionSchema.mjs
// schema for trivia questions (options of answers, & correct answer)
import mongoose from 'mongoose';

// Schema for questions
const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true,
    },
    options: {
        type: [String], // Array of strings for the multiple-choice options
        required: true,
    },
    correctAnswer: {
        type: String, // Stores the correct answer
        required: true,
    },
});

// create & export Question model
const Question = mongoose.model('Question', questionSchema);
export default Question;
