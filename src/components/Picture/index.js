import React from "react";
import "./style.css";

function Picture (props) {
    return (
        <td>{props.pictures.map(picture => (<span className={props[picture.id]} {...props} onClick={props.onClick} data-value={picture.id}><img id={picture.id.toString()} alt={picture.name}src={picture.image}></img></span>))}</td>
    )
}

export default Picture;

