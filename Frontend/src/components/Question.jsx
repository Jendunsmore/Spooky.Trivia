import React, { useState, useEffect } from 'react';
import { getQuestion, updateQuestion, deleteQuestion } from '../utilities/api';

function Question({ onAnswer }) {
    const [question, setQuestion] = useState(null); // Initialize as null for better clarity during loading
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        // Fetch a single question on mount
        getQuestion()
            .then((data) => {
                console.log('Fetched data:', data); // debugging
                setQuestion(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching question:', err);
                setLoading(false);
            });
    }, []);

    const handleUpdateQuestion = async (questionId, questionData) => {
        try {
            const updatedQuestion = await updateQuestion(questionId, questionData);
            setQuestion(updatedQuestion); // Update state with the new question
        } catch (error) {
            console.error('Error updating question:', error);
        }
    };

    const handleDeleteQuestion = async (questionId) => {
        try {
            await deleteQuestion(questionId);
            setQuestion(null); // Clear question after deletion
        } catch (error) {
            console.error('Error deleting question:', error);
        }
    };

    if (loading) {
        return <div>Loading question...</div>;
    }

    if (!question) {
        return <div>No question available.</div>;
    }

    return (
        <div className="question-card">
            <h2>{question.question}</h2>
            {question.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onAnswer(option === question.answer)} // Pass whether the answer is correct
                >
                    {option}
                </button>
            ))}
            <div className="admin-actions">
                <button onClick={() => handleUpdateQuestion(question._id, question)}>Update Question</button>
                <button onClick={() => handleDeleteQuestion(question._id)}>Delete Question</button>
            </div>
        </div>
    );
}

export default Question;
