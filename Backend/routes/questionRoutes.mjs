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

// Routes to 'POST' or Create questions
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

// Routes to 'PUT" or Update a question
router.put('/:id', async (req, res) => {
    try {
        let updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Routes to 'DELETE' a question
router.delete('/:id', async (req, res) => {
    try {
        let deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        res.json(deletedQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});


export default router;
