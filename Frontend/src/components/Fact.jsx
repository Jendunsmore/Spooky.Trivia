// shows random Halloween facts between questions

// src/components/FactPopup.jsx
// Shows random Halloween facts between questions

import React from "react";

function FactPopup({ fact }) {
    return (
        <div className="fact-popup">
            <p>{fact}</p>
        </div>
    );
}

export default FactPopup;
