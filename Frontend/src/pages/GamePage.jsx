import React, { useState, useEffect } from "react";
import { fetchQuestions, submitScore, fetchGif } from "../utilities/api.mjs";
import Question from "../components/Question";
import Score from "../components/Score";
import funFacts from "../data/facts";

function GamePage() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFact, setShowFact] = useState(false);
    const [factGif, setFactGif] = useState("");
    const [currentFact, setCurrentFact] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        const loadQuestions = async () => {
            const data = await fetchQuestions(); // Fetch all questions
            const shuffledQuestions = data.sort(() => 0.5 - Math.random()); // Shuffle questions
            const selectedQuestions = shuffledQuestions.slice(0, 10); // Select first 10 questions
            setQuestions(selectedQuestions);
        };
        loadQuestions();
    }, []);

    const handleAnswer = async (isCorrect) => {
        if (isCorrect) setScore(score + 1);

        setShowFact(true);

        const gif = await fetchGif();
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        setFactGif(gif);
        setCurrentFact(randomFact);

        setTimeout(() => {
            if (currentQuestionIndex + 1 < questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setShowFact(false);
            } else {
                setIsGameOver(true);
                console.log("Submitting score:", {userId:"64a7c9e4c8b0b0e456789123", score });
                submitScore({ userId: "64a7c9e4c8b0b0e456789123", score });
            }
        }, 3000);
    };

    return (
        <div className="game-page container py-4">
            {isGameOver ? (
                <Score score={score} totalQuestions={questions.length} />
            ) : showFact ? (
                <div className="fact-display bg-dark text-warning text-center rounded py-4 px-3">
                    <img
                        src={factGif}
                        alt="Spooky Fact"
                        className="mb-3 img-fluid"
                        style={{ maxWidth: "300px" }}
                    />
                    <p className="lead">{currentFact || "Here's a spooky fact!"}</p>
                </div>
            ) : (
                <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={(isCorrect) =>
                        handleAnswer(isCorrect === questions[currentQuestionIndex]?.correctAnswer)
                    }
                />
            )}
        </div>
    );
}

export default GamePage;
