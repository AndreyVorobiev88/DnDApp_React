import React from "react";
import './Badge.css';

function Badge(props) {

    return (

        <div className="div_badge_vertical">

            <img src={props.Picture} className="image_badge shadow border_radius" alt=""></img>
            <span className="text_under_badge">{props.Value}</span>

        </div>

    )

}

export default Badge