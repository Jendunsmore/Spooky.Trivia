// src/components/GifDisplay.jsx
// Fetches and displays a random Halloween GIF from the Giphy API

import React, { useState, useEffect } from "react";

function GifDisplay() {
    const [gifUrl, setGifUrl] = useState("");

    useEffect(() => {
        const fetchGif = async () => {
            try {
                const res = await fetch(
                    `https://api.giphy.com/v1/gifs/search?api_key=fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2&q=halloween&limit=25`
                );
                const data = await res.json();

                // Randomly select a GIF from the results
                const gifs = data.data;
                if (gifs.length > 0) {
                    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                    setGifUrl(randomGif.images.fixed_height.url);
                } else {
                    setGifUrl(""); // No GIFs found
                }
            } catch (error) {
                console.error("Error fetching the GIF:", error);
            }
        };

        fetchGif();
    }, []);

    return gifUrl ? <img src={gifUrl} alt="Halloween GIF" /> : <p>Loading GIF...</p>;
}

export default GifDisplay;
