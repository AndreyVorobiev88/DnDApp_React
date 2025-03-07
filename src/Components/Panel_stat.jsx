
import React from "react";
import './Panel_stat.css';

function Panel_stat (props) {
  
  
      return (
     
            <div className="div_stat_panel">
                <img src={props.Picture} className={"image_stat"} alt = ""></img>
                <span className={"text_stat"}>{props.StatName}:</span> 
                <span className={"text_stat_value"}>{props.Value}</span> 
                <span className={"text_stat_SkillLevel"} >{props.Bonus}</span> 

            </div>          
      )
}
  
 export default  Panel_stat