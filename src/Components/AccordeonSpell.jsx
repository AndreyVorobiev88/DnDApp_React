import React from "react";
import './AccordeonSpell.css';
import {Accordion} from "@ark-ui/react"

import DownIcon from "../Resources/ArrowDown.jpg"

function AccordeonSpell(props) {


    return (
        <Accordion.Root defaultValue={['React']} collapsible>
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                {item}
                <Accordion.ItemIndicator>
                  <img src={DownIcon} alt=""/>
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      )

}

export default AccordeonSpell