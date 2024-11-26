// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "./app.css";
import NavBar from "./components/NavBar";


function App() {
    const bats = Array.from({ length: 10 });

    return (
        <>
            <div className="background-overlay"></div>
            <NavBar />
            <div className="falling-bats">
                {bats.map((_, index) => (
                    <span
                        key={index}
                        className="bat"
                        style={{ left: `${Math.random() * 100}vw` }}
                    ></span>
                ))}
            </div>
            <div className="app-content">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/game" element={<GamePage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
