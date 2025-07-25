import React, { useState } from 'react';
import './Dice.css';
import '../Main.css';
import CharacterDice from "../Resources/CharacterDice.JPG"
import DiceCounter from './DiceCounter.jsx';

function Dice() {


    const [isHovered, setIsHovered] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const imageStyle = {
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered ? '0 0 10px rgb(255, 255, 255)' : 'none',
    };

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

 
    return (
        <div className='main_div_horizontal main_padding'>
            <img 
                src={CharacterDice} 
                className='dice_image' 
                alt='Dice'
                style={imageStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={openDialog}
            />

            <dialog 
                id="DiceModal" 
                className='secondary_background border_radius dialog dialog::backdrop' 
                open={isDialogOpen}
                onClose={closeDialog}
            >
                <DiceCounter/>
                {/*<button onClick={closeDialog} className='border_radius main_margin_top'>Закрыть</button>*/}
            </dialog>


        </div>
    );

}

export default Dice


