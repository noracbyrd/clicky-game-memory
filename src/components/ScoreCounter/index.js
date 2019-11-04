import React from "react";
import "./style.css";

function ScoreCounter (props) {
    return (
        <div>
            <ul>
                <li>Current Score: {props.scoreCounter}</li>
                <li>Top Score: {props.topScore}</li>
            </ul>
        </div>
    )
}

export default ScoreCounter;