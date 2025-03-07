
import React from "react";
import './Panel.css';

function Panel (props) {
  
  
      return (
     
            <div className="div_panel">
                <div><span className="text_stat">Имя: </span> <span className="text_value">{props.Name}</span> </div>

                <div><span className="text_stat">Раса: </span> <span className="text_value">{props.Race}</span> </div>

                <div><span className="text_stat">Класс: </span> <span className="text_value">{props.ClassName}</span> </div>

                <div><span className="text_stat">Подкласс: </span> <span className="text_value">{props.Subclass}</span></div>

                <div><span className="text_stat">Мировоззрение: </span> <span className="text_value">{props.Outlook}</span> </div>

                <div><span className="text_stat">Уровень: </span> <span className="text_value">{props.Level}</span> </div>

                <div><span className="text_stat">Уровень мастерства: </span> <span className="text_SkillLevel">{props.SkillLevel}</span></div>

            </div>          
      )
}
  
 export default  Panel