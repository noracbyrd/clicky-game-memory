// Children: Score Message and Score Counter
import React from "react";
import "./style.css";
import ScoreCounter from "../ScoreCounter";
import ScoreMsg from "../ScoreMsg";

function Navbar (props) {
    return (
        <nav>
        <div className="nav-wrapper">
            <div className="row">
            <div className="col s4">
            <h1 className="brand-logo" id="gameTitle">Memory Clicky Game</h1>
                </div>
                <div className="col navtext s4" id="scoreMessage">
                    <ScoreMsg scoreMsg={props.scoreMsg}/>
                </div>
                <div className="col navtext s4">
                    <ScoreCounter scoreCounter={props.scoreCounter} topScore={props.topScore}/>
                </div>
            </div>
        </div>
      </nav>
    )
}

export default Navbar;
