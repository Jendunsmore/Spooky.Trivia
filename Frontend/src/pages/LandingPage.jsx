import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page container text-center py-5">
            <h1 className="display-4 text-warning">🎃 Halloween Trivia Game 🎃</h1>
            <p className="lead text-light">
                Test your spooky knowledge and see how much you know about Halloween!
            </p>
            <button
                onClick={() => navigate("/game")}
                className="btn btn-lg btn-outline-warning mt-3"
            >
                Start Game
            </button>
        </div>
    );
}

export default LandingPage;
