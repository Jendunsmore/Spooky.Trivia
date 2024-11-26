import React, { useState } from 'react';
import funFacts from '../data/funFacts';
import questions from '../data/questions';
import Question from '../components/Question';
import Fact from '../components/Fact';
import GifDisplay from '../components/GifDisplay';
import Score from '../components/Score';

function GamePage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFact, setShowFact] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        setShowFact(true);
        setTimeout(() => {
            if (currentQuestionIndex + 1 < questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setShowFact(false);
            } else {
                setIsGameOver(true);
            }
        }, 3000); // Show fact for 3 seconds
    };

    return (
        <div className="game-page">
            {isGameOver ? (
                <Score score={score} />
            ) : (
                <>
                    {showFact ? (
                        <>
                            <Fact fact={funFacts[Math.floor(Math.random() * funFacts.length)]} />
                            <GifDisplay />
                        </>
                    ) : (
                        <Question
                            question={questions[currentQuestionIndex]}
                            onAnswer={handleAnswer}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default GamePage;
