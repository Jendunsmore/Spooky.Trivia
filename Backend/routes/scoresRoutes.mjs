import express from 'express';
import Score from '../models/scoresSchema.mjs';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newScore = new Score(req.body);
        await newScore.save();
        res.json(newScore);
    } catch (err) {
        console.error("Error creating score:", err.message); // Log the error
        res.status(500).json({ message: `Error creating score: ${err.message}` });
    }
});

router.get('/', async (req, res) => {
    try {
        const scores = await Score.find().populate('scoreId', 'name email');
        res.json(scores);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching scores' });
    }
});

// PUT Route: Update a score by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedScore = await Score.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedScore) {
            return res.status(404).json({ message: "Score not found" });
        }
        res.json(updatedScore);
    } catch (error) {
        console.error("Error updating score:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// DELETE Route: Delete a Score by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedScore = await Score.findByIdAndDelete(req.params.id);
        if (!deletedScore) {
            return res.status(404).json({ message: "Score not found" });
        }
        res.json({ message: "Score deleted successfully" });
    } catch (error) {
        console.error("Error deleting score:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
