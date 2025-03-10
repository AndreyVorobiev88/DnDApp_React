import React from "react";
import './Badge.css';

function Badge(props) {

    return (

        <div className="main_div_vertical align_center">

            <img src={props.Picture} className="image_badge main_panel" alt=""></img>
            <span className="main_text_value text_larger">{props.Value}</span>

        </div>

    )

}

export default Badge