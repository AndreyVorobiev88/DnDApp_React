import React from 'react';
import { useState } from 'react';

import './DiceCounter.css';
import '../Main.css';
import Dice from './Dice'

import D4 from "../Resources/D4.png"
import D6 from "../Resources/D6.png"
import D8 from "../Resources/D8.png"
import D10 from "../Resources/D10.png"
import D12 from "../Resources/D12.png"
import D20 from "../Resources/D20.png"


function RandomIntegerInRange(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
function DiceCounter() {


    const [SelectedDiceRank, setSelectedDiceRank] = useState(false);
    const [diceAmount, setDiceAmount] = useState(1);
    const [diceResult, setDiceResult] = useState(null);

    return (

        <div>
            <div>
                <p className='text_style_black'>Бросок кубика</p>
            </div>

            <div className="main_div_horizontal space_between gap">


                <Dice isSelected={SelectedDiceRank===4} onSelect={()=>{setSelectedDiceRank(4)}} Picture={D4}></Dice>
                <Dice isSelected={SelectedDiceRank===6} onSelect={()=>{setSelectedDiceRank(6)}}Picture={D6}></Dice>
                <Dice isSelected={SelectedDiceRank===8} onSelect={()=>{setSelectedDiceRank(8)}}Picture={D8}></Dice>
                <Dice isSelected={SelectedDiceRank===10} onSelect={()=>{setSelectedDiceRank(10)}}Picture={D10}></Dice>
                <Dice isSelected={SelectedDiceRank===12} onSelect={()=>{setSelectedDiceRank(12)}}Picture={D12}></Dice>
                <Dice isSelected={SelectedDiceRank===20} onSelect={()=>{setSelectedDiceRank(20)}}Picture={D20}></Dice>

            </div>

            <div className='main_div_horizontal main_margin_top'>


                <div className="minus_layout align_center main_cursor"
                    onClick={() => {
                        
                        setDiceAmount((prev)=>{return prev-1})

                    }        
                    }
                > 
                    <span className='text_style_black '>-</span>
                </div>

                <div className="number_layout align_center"> 
                    <span className='text_style_black' id = "dice_amount">{diceAmount}</span>
                </div>

                <div className="plus_layout align_center main_cursor"
                    onClick={() => {
                        
                        setDiceAmount((prev)=>{return prev+1})
                                     
                    }        
                    }
                > 
                    <span className='text_style_black' >+</span>
                </div>

            </div>

            <div className='main_div_horizontal align_center'>

                    <div className='button_layout align_center main_margin_top main_cursor'
                        onClick={() => {
                            
                                                      
                            let iRez = 0;

                            for (let i = 0; i < diceAmount; i++) {

                                iRez += RandomIntegerInRange(1,SelectedDiceRank);

                            }
                            
                            setDiceResult(iRez);

                        
                        }}

                    >

                        <span className='text_style_white'>Бросить</span>
                        
                    </div>

                    <div className='main_margin_top'>

                        <span className={`text_style_black margin_left_10 ${diceResult ? "visible" : "hidden"}`} id="dice_result"> = {diceResult}</span>
                    </div>

            </div>

        </div>


    )


}

export default DiceCounter