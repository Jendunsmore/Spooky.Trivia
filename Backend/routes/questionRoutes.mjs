import express from 'express';
import Question from '../models/Question.mjs';

const router = express.Router();

// Routes to 'GET' all questions
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({error: 'Failed to fetch questions'});
    }
});

// Will need to add a **** POST **** Route


export default router;
