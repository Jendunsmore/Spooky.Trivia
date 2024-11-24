import express from 'express';
import Question from '../models/Question.mjs';

const router = express.Router();

// Routes to 'GET' all questions
router.get('/', async (req, res) => {
    try {
        const allQuestions = await Question.find({});
        res.status(200).json(allQuestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to fetch questions'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.json(newQuestion);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Failed to add question' });
    }
});


export default router;
