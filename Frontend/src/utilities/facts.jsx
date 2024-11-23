// Fetch the facts
import axios from 'axios';

const fetchRandomFact = async () => {
    try {
        const response = await axios.get('/api/facts/random');
        return response.data.fact;
    } catch (error) {
        console.error('Error fetching fact:', error);
        return 'No fact available!';
    }
};

export { fetchRandomFact };
