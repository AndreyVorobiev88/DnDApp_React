
import React from "react";
import './Panel_stat.css';

function Panel_stat (props) {
  
  
      return (
     
            <div className="div_stat main_panel">
                <img src={props.Picture} className={"main_panel image_stat "} alt = ""></img>
                <span className={"main_text_info text_stat_info"}>{props.StatName}:</span> 
                <span className={"main_text_value text_stat_value"}>{props.Value}</span> 
                <span className={"main_text_bonus"} >{props.Bonus}</span> 

            </div>          
      )
}
  
 export default  Panel_stat