import React from "react";
import './Badge.css';

function Badge(props) {

    return (

        <div className="main_div_vertical align_center main_padding">

            <img src={props.Picture} className="image_badge" alt=""></img>
            <span className="main_text_info text_larger">{props.Value}</span>

        </div>

    )

}

export default Badge