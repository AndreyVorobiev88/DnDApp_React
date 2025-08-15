
import React from "react";
import './Panel_stat.css';
import StatsSkill from "./Stats_Skill";
import EditableField from "./EditableField";

function Panel_stat (props) {
  
      return (
     
            <div className={props.isColored ? ' div_stat background_green' : 'div_stat background_white'} >


                  <div className="size_title_box div_stat">
                        
                        <img src={props.Image} className={"image_stat"} alt = ""/>

                        <span className={"stat_text"}>
                              {props.Stat.StatName}:
                        </span> 
                  </div>

                  <div className="size_value_box div_stat">

                        <span className={"stat_text"}>
                        {/*{props.Stat.Value}*/
                        
                              <EditableField 
                                    value={props.Stat.Value}
                                    onValueChange={(newValue) => {props.onStatChange(props.Stat.StatName, newValue)}}
                              />
                        }
                        </span> 

                        <span className={"bonus_text"} >
                        {
                              <EditableField 
                                    value={props.Stat.Bonus}
                                    onValueChange={(newValue) => {props.onStatBonusChange(props.Stat.StatName, newValue)}}
                              />
                        }
                        </span> 
                  </div>

                  {
                        ((props.Stat.Skills) && (props.Stat.Skills.length > 0)) ?
                              props.Stat.Skills.map((skill) => (

                                    <StatsSkill 
                                          key={skill.StatName}
                                          StatSkill={skill}
                                    />
                              ))
                        : <></>
                        
                  }

            </div>       
      )
}
  
 export default  Panel_stat