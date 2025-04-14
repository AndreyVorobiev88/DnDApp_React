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

                <Accordion.ItemTrigger className="main_div_horizontal raduis size_item_trigger">

                  <img src={DownIcon} className="raduis" alt="" />

                  <div className="div_item_trigger size_item_trigger">
                    <span className="main_text_value color">{item.SpellName}</span>
                    <span className="main_text_info">Уровень: {item.Level} </span>
                  </div>

                  <Accordion.ItemIndicator>
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>

              <Accordion.ItemContent>
                <div className="main_div_vertical"> 
                  
                  <span className="main_text_info color margin_left">{"Дистанция: " + item.Distance}</span>
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