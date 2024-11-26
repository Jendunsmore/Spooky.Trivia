// src/pages/LeaderboardPage.jsx
import React, { useEffect, useState } from "react";
import { fetchScores } from "../utilities/api";

function LeaderboardPage() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const loadScores = async () => {
            const data = await fetchScores();
            setScores(data);
        };
        loadScores();
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-warning text-center mb-4">🎉 Leaderboard 🎉</h1>
            <div className="bg-black text-warning p-4 rounded shadow-lg">
                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Score</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map((score, index) => (
                            <tr key={score._id}>
                                <td>{index + 1}</td>
                                <td>{score.userId?.name || "Anonymous"}</td>
                                <td>{score.score}</td>
                                <td>{new Date(score.date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LeaderboardPage;
