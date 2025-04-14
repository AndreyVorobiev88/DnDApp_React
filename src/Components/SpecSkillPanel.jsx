import React from "react";
import './SpecSkillPanel.css';
import '../Main.css';

function SpecSkillPanel(props) {

    return (

        <div className="main_panel main_max_width">
            <div className="main_div_horizontal main_justify">
                <img src = {props.SpecSkillSymbol} className=" main_image" alt="spec"/>
                <span className='stat_text'>{props.SpecSkills.Title}</span>
            </div>

            <div className="main_div_vertical">
                {
                    props.SpecSkills.Items.map((skill) => (

                        <span className='margin stat_text'>{skill}</span>

                    ))

                }
            </div>

        </div>

    )

}

export default SpecSkillPanel