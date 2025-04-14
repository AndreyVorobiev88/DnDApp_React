
import React from "react";
import './Panel_stat.css';
import StatsSkill from "./Stats_Skill";

function Panel_stat (props) {
  
      console.log(props)
  
      return (
     
            <div className="div_stat">


                  <div className="size_title_box div_stat">
                        
                        <img src={props.Image} className={"image_stat"} alt = ""/>

                        <span className={"stat_text"}>
                              {props.Stat.StatName}:
                        </span> 
                  </div>

                  <div className="size_value_box div_stat">

                        <span className={"stat_text"}>
                              {props.Stat.Value}
                        </span> 

                        <span className={"bonus_text"} >
                              {props.Stat.Bonus}
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