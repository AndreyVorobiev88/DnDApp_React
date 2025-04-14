import React from "react";
import './Stats_Skill.css';
import '../Main.css';

function StatsSkill(props) {


    return (

        <div className="margin_right_10 "> 

            {(props.StatSkill.Active) ? (

                
                <div className="padding_10 background_used">
                    <span className="text_used">
                        {props.StatSkill.SkillName + ": "}
                    </span>
                    <span className="bonus_used">
                        {props.StatSkill.Bonus}
                    </span>
                </div>
            )

                :
                <div className="padding_10 background_not_used">
                    <span className="text_not_used">
                        {props.StatSkill.SkillName + ": "}
                    </span>
                    <span className="bonus_not_used">
                        {props.StatSkill.Bonus}
                    </span>
                </div>               
                
            }
            
        </div>
    )


}

export default StatsSkill