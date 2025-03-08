import React from "react";
import './Badge.css';

function Badge(props) {

    return (

        <div className="div_badge">

            <img src={props.Picture} className="image_badge" alt=""></img>
            <span className="span H1">{props.Value}</span>

        </div>

    )

}

export default Badge