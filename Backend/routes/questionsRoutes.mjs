import express from 'express';
import Question from '../models/questionsSchema.mjs';

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { question, options, correctAnswer } = req.body;

        if (!question || !options || !correctAnswer) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newQuestion = new Question({
            question,
            options,
            correctAnswer,
        });

        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        console.error("Error creating question:", err);
        res.status(500).json({ message: "Server error" });
    }
});


router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching questions' });
    }
});

// PUT Route: Update a question by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Return the updated document
        });
        if (!updatedQuestion) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.json(updatedQuestion);
    } catch (error) {
        console.error("Error updating question:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// DELETE Route: Delete a question by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        if (!deletedQuestion) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.json({ message: "Question deleted successfully" });
    } catch (error) {
        console.error("Error deleting question:", error);
        res.status(500).json({ message: "Server error" });
    }
});


export default router;
