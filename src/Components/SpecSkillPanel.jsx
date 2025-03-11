import React from "react";
import './SpecSkillPanel.css';
import '../Main.css';

function SpecSkillPanel(props) {

    return (

        <div className="main_panel">
            <img src = {props.SpecSkillSymbol} className=" main_image" alt="spec"/>
            <span className='main_text_value'>Вампирские навыки</span>
        </div>

    )

}

export default SpecSkillPanel