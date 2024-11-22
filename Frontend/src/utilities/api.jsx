import axios from 'axios';

const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY; // API key gets stored in .env
const GIPHY_ENDPOINT = 'https://api.giphy.com/v1/gifs/halloween';

const fetchRandomGif = async (tag = 'Halloween') => {
    try {
        const response = await axios.get(GIPHY_ENDPOINT, {
            params: {
                api_key: GIPHY_API_KEY,
            },
        });
        return response.data.data.images.original.url; // Return GIF URL
    } catch (error) {
        console.error('Error fetching GIF:', error);
    return null;
    }
};

export { fetchRandomGif };
