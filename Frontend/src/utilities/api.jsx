import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api/questions',
});

export const getQuestion = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error(error);
        console.error('Error fetching questions:', error);
        throw error;
    }
};

export const createQuestion = async (questionData) => {
    try {
        const response = await api.post('/', questionData);
        return response.data;
    } catch (error) {
        console.error(error);
        console.error('Error creating questions:', error);
        throw error;
    }
};

export const updateQuestion = async (questionId, questionData) => {
    try {
        const response = await api.put(`/${questionId}`, questionData);
        return response.data;
    } catch (error) {
        console.error(error);
        console.error('Error updating questions:', error);
        throw error;
    }
};

export const deleteQuestion = async (questionId) => {
    try {
        const response = await api.delete(`/${questionId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        console.error('Error deleting questions:', error);
        throw error;
    }
};

export default api;
