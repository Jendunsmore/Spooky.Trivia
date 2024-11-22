// Fetch the facts
import axios from "axios";

export const fetchRandomFact = async () => {
    try {
        const response = await axios.get("/api/facts/random");
        return response.data.fact; // Return the fact content
    } catch (error) {
        console.error("Error fetching random fact:", error);
        return "No fact available!";
    }
};
