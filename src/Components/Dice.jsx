import React, { useState } from 'react';
import './Dice.css';
import '../Main.css';
import Dice20 from "../Resources/Dice20.JPG"

function Dice() {


    const [isHovered, setIsHovered] = useState(false);

    const imageStyle = {
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered ? '0 0 30px rgb(255, 255, 255)' : 'none',
    };

    return (

        <div className='main_div_horizontal main_padding'>

            <img 
                src = {Dice20} 
                className='dice_image' 
                alt='Dice'
                style={imageStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />

        </div>

    )

}

export default Dice


