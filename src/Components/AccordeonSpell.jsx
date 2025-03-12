import React from "react";
import './AccordeonSpell.css';
import {Accordion} from "@ark-ui/react"

import DownIcon from "../Resources/ArrowDown.jpg"

function AccordeonSpell(props) {


    return (

      <div className="main_div_horizontal main_max_width">
        <Accordion.Root defaultValue={['Spells']} collapsible>
          {props.Spells.map((item) => (
              
              <Accordion.Item  value={item.SpellName}>

                <Accordion.ItemTrigger className="main_div_horizontal raduis">

                  <img src={DownIcon} className="raduis" alt="" />
                  <span className="main_text_value margin_15">{item.SpellName}</span>
                  <span className="main_text_info margin_15">Уровень: {item.Level} </span>
                  
                  <Accordion.ItemIndicator>
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>

              <Accordion.ItemContent>
                <div className="main_div_vertical"> 
                  
                  <p className="main_text_info color margin_left">{"Дистанция: " + item.Distance}</p>
                  <span className="main_text_info color margin_left">{"Школа: " + item.School}</span>
                  <span className="main_text_info color margin_left">{"Время: " + item.Time}</span>
                  <span className="main_text_info color margin_left">{"Базовый урон: " + item.BaseDamage}</span>
                  <span className="main_text_info color margin_top margin_left">{item.Description}</span>

                </div>
                
              </Accordion.ItemContent>
            </Accordion.Item>
            
          ))}
        </Accordion.Root>
      
      </div>
    )
}

export default AccordeonSpell