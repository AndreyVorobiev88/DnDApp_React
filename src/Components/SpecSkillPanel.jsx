import React from "react";
import './SpecSkillPanel.css';
import '../Main.css';

function SpecSkillPanel(props) {

    return (

        <div className="spec_skill_panel margin_left_10">
            <div className="main_div_horizontal">
                <img src = {props.SpecSkillSymbol} className=" image_spec_skill" alt="spec"/>
                <span className=' margin_left_10 spec_skill_title'>{props.SpecSkills.Title}</span>
            </div>

            <div className="main_div_vertical">
                {
                    props.SpecSkills.Items.map((skill) => (

                        <span className='margin_top_30 stat_text background_spec_skill'>{skill}</span>

                    ))

                }
            </div>

        </div>

    )

}

export default SpecSkillPanel