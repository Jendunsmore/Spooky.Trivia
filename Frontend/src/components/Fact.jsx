// src/components/FactPopup.jsx
import React from 'react';
import "./Fact.css";


function Fact({ fact }) {
    return (
        <div className="fact-display">
            <p>{fact}</p>
        </div>
    );
}

export default Fact;
