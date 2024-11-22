import express from 'express';
import Score from '../models/Score.mjs';

const router = express.Router();

// GET route
router.get('/', async (req, res) => {
    try {
        const scores = await Score.find().sort({ score: -1 }) //Sort by descending order
        res.status(200).json(scores);
    } catch (err) {
        res.status(500).json({error: 'Failed to fetch scores'});
    }
});

// POST route
router.post('/', async (req, res) => {
    const { username, score } = req.body;

    try {
        const newScore = new Score({ username, score });
        await newScore.save();
        res.status(201).json(newScore);
    } catch (err) {
        res.status(400).json({error: 'Failed to add score'});
    }
});

export default router;
