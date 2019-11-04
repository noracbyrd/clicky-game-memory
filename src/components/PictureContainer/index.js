// Children: Row
import React from "react";
import "./style.css";
import Picture from "../Picture"

function PictureContainer (props) {
    return (
        <div className="container">
            <table>
                <tbody>
                    <tr>
                   <Picture onClick={props.handlePictureClick} pictures={props.pictures} pictureid={props} clicked={props.clicked}/>
                  </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PictureContainer;