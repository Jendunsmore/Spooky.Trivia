import express from 'express';
import Fact from '../models/Fact.mjs';

const router = express.Router();

// GET a random fact
router.get('/random', async (req, res) => {
    try {
        const facts = await Fact.aggregate([{ $sample: {size: 1} }]);
        res.status(200).json(facts[0]);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch fact'});
    }
});

export default router;
