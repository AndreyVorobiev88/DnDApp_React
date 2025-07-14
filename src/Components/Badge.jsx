import React from "react";
import './Badge.css';

function Badge(props) {

    const handleClick = () => {
        if (props.onClick) {
            props.onClick(); 
        }
    };

    return (

        <div className="main_div_vertical align_center" onClick={handleClick}>

            <img src={props.Picture} className="image_badge main_cursor" alt="" ></img>
            <span className="main_text_info text_larger">{props.Value}</span>

        </div>
        

    )

}

export default Badge