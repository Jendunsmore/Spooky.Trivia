import React, { useState, useEffect } from "react";
import { fetchScores, updateScore, deleteScore } from "../utilities/api";

const LeaderboardPage = () => {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingScore, setEditingScore] = useState(null); // Holds score being edited
    const [newScore, setNewScore] = useState(""); // New score value for editing

    useEffect(() => {
        const loadScores = async () => {
            try {
                const data = await fetchScores();
                setScores(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching scores:", err);
            }
        };
        loadScores();
    }, []);

    // Handle score deletion
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this score?")) {
            try {
                await deleteScore(id);
                setScores(scores.filter((score) => score._id !== id));
            } catch (err) {
                console.error("Error deleting score:", err);
            }
        }
    };

    // Handle score update
    const handleEdit = async () => {
        try {
            const updatedScore = await updateScore(editingScore._id, { score: newScore });
            setScores(
                scores.map((score) =>
                    score._id === updatedScore._id ? updatedScore : score
                )
            );
            setEditingScore(null); // Close edit modal
            setNewScore(""); // Reset input
        } catch (err) {
            console.error("Error updating score:", err);
        }
    };

    if (loading) {
        return <div className="container text-center">Loading leaderboard...</div>;
    }

    return (
        <div className="container py-4">
            <h1 className="text-warning text-center">🎃 Leaderboard 🎃</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={score._id}>
                            <td>{index + 1}</td>
                            <td>{score.userId?.name || "Anonymous"}</td>
                            <td>{score.score}</td>
                            <td>{new Date(score.date).toLocaleDateString()}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => {
                                        setEditingScore(score);
                                        setNewScore(score.score);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(score._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingScore && (
                <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Score</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setEditingScore(null)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="number"
                                    className="form-control"
                                    value={newScore}
                                    onChange={(e) => setNewScore(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setEditingScore(null)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleEdit}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeaderboardPage;
