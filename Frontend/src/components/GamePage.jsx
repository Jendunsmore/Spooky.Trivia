import React, { useState, useEffect } from 'react';
import { fetchRandomGif } from '../utilities/api';

function GamePage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFact, setShowFact] = useState(false);
    const [isGameOver, setGameOver] = useState(false);
    const [gifUrl, setGifUrl] = useState(null);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        setShowFact(true);

        // Fetch GIF
        fetchRandomGif().then((url) => setGifUrl(url));

        setTimeout(() => {
            if (currentQuestionIndex + 1 < questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setShowFact(false);
                setGifUrl(null); // Clear GIF
            } else {
                setIsGameOver(true);
            }
        }, 5000); // 5 seconds
    };

    return (
        <div className='game-page'>
            {isGameOver ? (
                <Score score={score} />
            ) : (
                <>
                    {showFact ? (
                        <>
                            <Fact fact={funFacts[Math.floor(Math.random() * funFacts.length)]} />
                            {gifUrl && <img src={gifUrl} alt='Spooky GIF' />}
                        </>
                    ) : (
                        <Question
                            question={questions[currentQuestionIndex]}
                            onAnswer={onAnswer}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default GamePage;
