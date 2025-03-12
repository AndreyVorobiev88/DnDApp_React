
import React from "react";
import './Panel_stat.css';
import StatsSkill from "./Stats_Skill";

function Panel_stat (props) {
  
      console.log(props)
  
      return (
     
            <div className="main_panel">
                  <div className="div_stat">

                        <img src={props.Image} className={"main_panel image_stat"} alt = ""/>

                        <span className={"main_text_info text_stat_info"}>
                              {props.Stat.StatName}:
                        </span> 

                        <span className={"main_text_value text_stat_value"}>
                              {props.Stat.Value}
                        </span> 

                        <span className={"main_text_bonus"} >
                              {props.Stat.Bonus}
                        </span> 

                  </div>   
                  <div className="main_div_horizontal">
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
            </div>       
      )
}
  
 export default  Panel_stat