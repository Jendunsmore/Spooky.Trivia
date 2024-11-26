// src/components/ScoreSummary.jsx
// Calculates and displays the user's score and "spookiness level"
// at the end of the game.

import React from "react";

function ScoreSummary({ score }) {
    let level;
    if (score < 5) level = "Spooky Amateur";
    else if (score < 9) level = "Creepy Connoisseur";
    else level = "Halloween Master";

    return (
        <div className="score-summary">
            <h2>Your Score: {score}</h2>
            <p>Spookiness Level: {level}</p>
        </div>
    );
}

export default ScoreSummary;
