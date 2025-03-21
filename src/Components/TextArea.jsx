import React from "react";
import './TextArea.css';
import '../Main.css';

function TextArea(props) {



    return(

        <div className="main_margin">

            <div className="main_div_horizontal main_justify">

                <img src={props.Picture} className="main_image image_size "  alt=""></img>
                <span className="main_text_value">{props.Caption}</span>

            </div>
            <div >

                <textarea className="textarea_size" value={props.Value}></textarea>


            </div>


        </div>
    )
}

export default TextArea

