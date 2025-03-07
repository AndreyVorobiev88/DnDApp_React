
import React from "react";
import './Panel_info.css';
import Dice20 from "../Resources/Dice20.JPG"

function Panel (props) {
  
  
      return (
     
            <div className="div_panel">
                <div><span className="text_info">Имя: </span> <span className="text_value">{props.Name}</span> </div>

                <div className="div_margin"><span className="text_info">Раса: </span> <span className="text_value">{props.Race}</span> </div>

                <div className="div_margin"><span className="text_info">Класс: </span> <span className="text_value">{props.ClassName}</span> </div>

                <div className="div_margin"><span className="text_info">Подкласс: </span> <span className="text_value">{props.SubClass}</span></div>

                <div className="div_margin"><span className="text_info">Мировоззрение: </span> <span className="text_value">{props.Outlook}</span> </div>

                <div className="div_margin"><span className="text_info">Уровень: </span> <span className="text_value">{props.Level}</span> </div>

                <div className="div_margin"><span className="text_info">Уровень мастерства: </span> <span className="text_SkillLevel">{props.SkillLevel}</span></div>

                <div><img src = {Dice20} className="image_radius" alt = "portrait"></img></div>

            </div>          
      )
}
  
 export default  Panel