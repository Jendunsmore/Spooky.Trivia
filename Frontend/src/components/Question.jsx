import React from "react";

function Question({ question, onAnswer }) {
    if (!question) {
        return <div className="text-light">Loading...</div>;
    }

    return (
        <div className="question-card bg-dark text-warning rounded p-4">
            <h2 className="h4">{question.question}</h2>
            <div className="mt-3">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="btn btn-outline-warning mx-2 mt-2"
                        onClick={() => onAnswer(option === question.correctAnswer)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;
