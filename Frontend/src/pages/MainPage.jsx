import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
    const navigate = useNavigate();

    const startGame = () => {
        navigate('/game'); // navigate to GamePage
    };

    return (
        <div className='main-page'>
            <h1 className='title'> Welcome to Spooky Trivia</h1>
            <p className='subtitle'>Think you're an expert on Halloween? Prove it!</p>
            <button className='start-button' onClick={startGame}>
                Start Game
            </button>
        </div>
    );
};

export default MainPage;
