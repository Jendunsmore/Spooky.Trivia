// src/api.js
import axios from 'axios';


const API_BASE_URL = 'http://localhost:3001'; // Backend URL
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


export const fetchQuestions = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/questions`);
    return data;
};

export const fetchUsers = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/users`);
    return data;
};

export const fetchScores = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/scores`);
    return data;
};

export const submitScore = async (scoreData) => {
    const { data } = await axios.post(`${API_BASE_URL}/scores`, scoreData);
    return data;
};

export const fetchGif = async () => {
    try {
        const { data } = await axios.get(
            `https://api.giphy.com/v1/gifs/random?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&tag=halloween`
        );
        return data.data.images.fixed_height.url;
    } catch (error) {
        console.error("Error fetching GIF:", error);
        return null; // Return null if there's an error
    }
};

// Add this function in src/utilities/api.jsx
export const submitQuestion = async (questionData) => {
    const { data } = await axios.post(`${API_BASE_URL}/questions`, questionData);
    return data;
};
