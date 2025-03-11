
import React from "react";
import './Panel_info.css';
import '../Main.css';
import Dice20 from "../Resources/Dice20.JPG"

function Panel (props) {
  
  
      return (
     
            <div className="main_div_vertical main_panel">
                  <div>
                        <span className="main_text_info">Имя: </span> 
                        <span className="main_text_value">{props.Name}</span> 
                  </div>

                  <div className="margin_top_15">
                        <span className="main_text_info">Раса: </span> 
                        <span className="main_text_value">{props.Race}</span> 
                  </div>

                  <div className="margin_top_15">
                        <span className="main_text_info">Класс: </span> 
                        <span className="main_text_value">{props.ClassName}</span> 
                  </div>

                  <div className="margin_top_15">
                        <span className="main_text_info">Подкласс: </span> 
                        <span className="main_text_value">{props.SubClass}</span>
                  </div>

                  <div className="margin_top_15">
                        <span className="main_text_info">Мировоззрение: </span> 
                        <span className="main_text_value">{props.Outlook}</span> 
                  </div>

                  <div className="margin_top_15">
                        <span className="main_text_info">Уровень: </span> 
                        <span className="main_text_value">{props.Level}</span> 
                  </div>

                  <div className="margin_top_15">
                        <span className="main_text_info">Уровень мастерства: </span> 
                        <span className="main_text_bonus">{props.SkillLevel}</span>
                  </div>

                  <div className="margin_top_15">
                        <span className="main_text_info">Размер существа: </span> 
                        <span className="main_text_value">{props.Size}</span>
                  </div>

                  <div>
                        <img src = {Dice20} className="main_panel" alt = "portrait"/>
                  </div>

            </div>          
      )
}
  
 export default  Panel