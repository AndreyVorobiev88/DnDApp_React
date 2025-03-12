import React from "react";
import './Stats_Skill.css';
import '../Main.css';

function StatsSkill(props) {


    return (

        <div className="margin_right_10"> 

            {(props.StatSkill.Active) ?

                <span className="background_used">
                    {props.StatSkill.SkillName + ": " + props.StatSkill.Bonus}
                </span>

                :<span className="background_not_used">
                    {props.StatSkill.SkillName + ": " + props.StatSkill.Bonus}
                </span>
            }
            
        </div>
    )


}

export default StatsSkill