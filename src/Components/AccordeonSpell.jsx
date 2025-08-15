import React from "react";
import './AccordeonSpell.css';
import {Accordion} from "@ark-ui/react"

import SpellCard from "./SpellCard";

function AccordeonSpell(props) {

    return (

      <div className="div_item">
        {props.Spells.map((item) => (
          <SpellCard
            SpellName={item.SpellName}
            SpellLevel={item.Level}
            Distance={item.Distance}
            School={item.School}
            Time={item.Time}
            BaseDamage={item.BaseDamage}
            Description={item.Description}

          >
          </SpellCard>))
        }
      
      </div>
    )
}

export default AccordeonSpell