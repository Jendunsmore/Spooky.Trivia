// src/pages/SubmitQuestionPage.jsx
import React, { useState } from "react";
import { submitQuestion } from "../utilities/api";

const SubmitQuestionPage = () => {
    const [form, setForm] = useState({
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("option")) {
            const index = parseInt(name.split("-")[1], 10);
            setForm((prev) => {
                const newOptions = [...prev.options];
                newOptions[index] = value;
                return { ...prev, options: newOptions };
            });
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitQuestion(form);
            setMessage("Question submitted successfully!");
            setForm({ question: "", options: ["", "", "", ""], correctAnswer: "" });
        } catch (err) {
            console.error("Error submitting question:", err);
            setMessage("Error submitting question.");
        }
    };

    return (
        <div className="container py-4">
            <h1 className="text-warning text-center">Submit a Question</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label text-light">Question</label>
                    <input
                        type="text"
                        name="question"
                        className="form-control"
                        value={form.question}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    {form.options.map((option, index) => (
                        <div key={index}>
                            <label className="form-label text-light">Option {index + 1}</label>
                            <input
                                type="text"
                                name={`option-${index}`}
                                className="form-control"
                                value={option}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                </div>
                <div className="mb-3">
                    <label className="form-label text-light">Correct Answer</label>
                    <input
                        type="text"
                        name="correctAnswer"
                        className="form-control"
                        value={form.correctAnswer}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-warning">
                    Submit
                </button>
            </form>
            {message && <p className="text-light mt-3">{message}</p>}
        </div>
    );
};

export default SubmitQuestionPage;
