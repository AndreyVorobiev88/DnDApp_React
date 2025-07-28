import React, { useState } from 'react';
import './Dice.css';
import '../Main.css';



function Dice(props) {

    const [isHovered, setIsHovered] = useState(false);

    const imageStyle = {
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered ? '0 0 10px rgb(255, 255, 255)' : 'none',
    };



    return (

        <div>
            <img 
                src={props.Picture} 
                alt="dice"
                className='main_cursor'
                style={imageStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </div>
        

    )

}

export default Dice