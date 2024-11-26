import React from "react";

function Score({ score, totalQuestions }) {
    let spookinessLevel = "";
    if (score < 5) spookinessLevel = "Spooky Amateur";
    else if (score < 9) spookinessLevel = "Creepy Connoisseur";
    else spookinessLevel = "Halloween Master";

    return (
        <div className="score-summary bg-dark text-warning rounded p-4 text-center">
            <h2 className="display-6">Your Score: {score}/{totalQuestions}</h2>
            <p className="lead">Spookiness Level: <strong>{spookinessLevel}</strong></p>
        </div>
    );
}

export default Score;
