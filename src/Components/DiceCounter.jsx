import React from 'react';

import Badge from "./Badge.jsx"

import './DiceCounter.css';
import '../Main.css';
import Dice20 from "../Resources/Dice20.JPG"
import Dice6 from "../Resources/Dice6.JPG"


function RandomIntegerInRange(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
function DiceCounter() {

    let D20 = 0;

    return (

        <div>
            <p className='test_style'>Бросок кубика</p>

            

            <div className='main_div_horizontal'>

                <Badge 
                    Picture = {Dice20} 
                    Value = {"D20"}
                
                    onClick={() => {
                        
                        let valueDisplayD20 = document.getElementById("D20_Value");
                        valueDisplayD20.textContent = RandomIntegerInRange(1,20);
                    
                    
                    }}
                
                />

                <span id="D20_Value">{D20}</span>

            </div>

            <div className='main_div_horizontal main_margin_top'>

                <img

                    src={Dice6}
                    alt = "Dice6"
                    className='image_dice'
                    onClick={() => {
                        
                        let valueDisplayD20 = document.getElementById("D6_Value");
                        valueDisplayD20.textContent = RandomIntegerInRange(1,6);
                    
                    
                    }
                    }
                
                />

                <span id="D6_Value">{D20}</span>

            </div>

        </div>

    )


}

export default DiceCounter