
import React from "react";
import './Panel_info.css';
import '../Main.css';

function Panel (props) {
  
  
      return (
     
            <div className="panel_info_content main_div_vertical  main_divider">

                  <div className="main_div_vertical">
                        <span className="main_text_info">Раса </span> 
                        <span className="main_text_value">{props.Race}</span> 
                  </div>

                  <div className="main_div_vertical">
                        <span className="main_text_info">Класс </span> 
                        <span className="main_text_value">{props.ClassName}</span> 
                  </div>

                  <div className="main_div_vertical">
                        <span className="main_text_info">Подкласс </span> 
                        <span className="main_text_value">{props.SubClass}</span>
                  </div>

                  <div className="main_div_vertical">
                        <span className="main_text_info">Мировоззрение </span> 
                        <span className="main_text_value">{props.Outlook}</span> 
                  </div>

                  <div className="main_div_vertical">
                        <span className="main_text_info">Уровень мастерства </span> 
                        <span className="main_text_value">{props.SkillLevel}</span>
                  </div>

                  <div className="main_div_vertical">
                        <span className="main_text_info">Размер существа </span> 
                        <span className="main_text_value">{props.Size}</span>
                  </div>

            </div>          
      )
}
  
 export default  Panel