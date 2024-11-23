import React, { useState, useEffect } from 'react';
import { fetchRandomGif } from '../utilities/api';
import { fetchRandomFact } from '../utilities/facts';


function GamePage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFact, setShowFact] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [gifUrl, setGifUrl] = useState(null);
    const [fact, setFact] = useState("");

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        setShowFact(true);

        // Fetch a random GIF and random Fact
        fetchRandomGif().then((url) => setGifUrl(url));
        fetchRandomFact().then((fact) => setShowFact(fact));


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
                            <Fact fact={fact || Fact[Math.floor(Math.random() * Fact.length)]} />
                            {gifUrl ? (
                                <img src={gifUrl} alt='Spooky GIF' />
                            ) : (
                                <p>Loading spooky GIF...</p>
                            )}
                        </>
                    ) : (
                        <Question
                            question={Question[currentQuestionIndex]}
                            onAnswer={handleAnswer}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default GamePage;
