// Children: Row
import React from "react";
import "./style.css";
import Picture from "../Picture"

function PictureContainer (props) {
    return (
        <div className="container">
            <table id="table">
                <tbody id="tbody">
                   <Picture onClick={props.handlePictureClick} pictures={props.pictures} pictureid={props} clicked={props.clicked}/>
                </tbody>
            </table>
        </div>
    )
}

export default PictureContainer;