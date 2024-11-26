import React from "react";

function SpookyAudio() {
    return (
        <audio autoPlay loop>
            <source src="./assets/spooky-audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
}

export default SpookyAudio;
