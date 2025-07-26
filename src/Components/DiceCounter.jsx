import React from 'react';

import Badge from "./Badge.jsx"

import './DiceCounter.css';
import '../Main.css';
import Dice20 from "../Resources/Dice20.JPG"
import Dice6 from "../Resources/Dice6.JPG"

import D4 from "../Resources/D4.JPG"
import D6 from "../Resources/D6.JPG"
import D8 from "../Resources/D8.JPG"
import D10 from "../Resources/D10.JPG"
import D12 from "../Resources/D12.JPG"
import D20 from "../Resources/D20.JPG"



function RandomIntegerInRange(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
function DiceCounter() {

    {/*let D_20 = 0;*/ }

    let iAmount = 1;

    return (

        <div>
            <div>
                <p className='text_style_black'>Бросок кубика</p>
            </div>

            <div className="main_div_horizontal space_between gap">
 
                <img src={D4} className = "gap main_cursor" alt = "D4"></img>
                <img src={D6} className = "gap main_cursor" alt = "D6"></img>
                <img src={D8} className = "gap main_cursor" alt = "D8"></img>
                <img src={D10} className = "gap main_cursor" alt = "D10"></img>
                <img src={D12} className = "gap main_cursor" alt = "D12"></img>
                <img src={D20} className = "gap main_cursor" alt = "D20"></img>

            </div>

            <div className='main_div_horizontal main_margin_top'>


                <div className="minus_layout align_center main_cursor"
                    onClick={() => {
                        
                        let valueDisplayDiceAmount = document.getElementById("dice_amount");
                        if (iAmount > 1) iAmount -= 1;
                        valueDisplayDiceAmount.textContent = iAmount;
                    
                    
                    }        
                    }
                > 
                    <span className='text_style_black '>-</span>
                </div>

                <div className="number_layout align_center"> 
                    <span className='text_style_black' id = "dice_amount">1</span>
                </div>

                <div className="plus_layout align_center main_cursor"
                    onClick={() => {
                        
                        let valueDisplayDiceAmount = document.getElementById("dice_amount");
                        iAmount += 1;
                        valueDisplayDiceAmount.textContent = iAmount;
                    
                    
                    }        
                    }
                > 
                    <span className='text_style_black' >+</span>
                </div>

            </div>

            <div className='button_layout align_center main_margin_top main_cursor'>

                <span className='text_style_white'>Бросить</span>

            </div>


{/*
            <div className='main_div_horizontal'>

                <Badge 
                    Picture = {Dice20} 
                    Value = {"D20"}
                
                    onClick={() => {
                        
                        let valueDisplayD20 = document.getElementById("D20_Value");
                        valueDisplayD20.textContent = RandomIntegerInRange(1,20);
                    
                    
                    }}
                
                />

                <span id="D20_Value">{D_20}</span>

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

            </div> */}

        </div>

    )


}

export default DiceCounter