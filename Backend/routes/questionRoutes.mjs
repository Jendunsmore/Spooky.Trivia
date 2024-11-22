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

router.post('/', async (req, res) => {
    const { questionText, options, correctAnswer } = req.body;

    try {
        const newQuestion = new Question({ questionText, options, correctAnswer });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add question' });
    }
});


export default router;
