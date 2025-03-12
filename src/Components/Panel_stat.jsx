
import React from "react";
import './Panel_stat.css';

function Panel_stat (props) {
  
  
      return (
     
            <div className="div_stat main_panel">

                  <img src={props.Appearance} className={"main_panel image_stat"} alt = ""/>

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
      )
}
  
 export default  Panel_stat