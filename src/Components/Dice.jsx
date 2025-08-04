import React, { useState } from 'react';
import './Dice.css';
import '../Main.css';



function Dice(props) {

    const {isSelected, onSelect} = props;
    const [isHovered, setIsHovered] = useState(false);

    const imageStyle = {
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered ? '0 0 10px #D9E3DA' : 'none',

        boxShadow: isSelected ? '0 0 10px #1C492B' : 'none',
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

                onClick={() => onSelect()}
            />
        </div>
        

    )

}

export default Dice