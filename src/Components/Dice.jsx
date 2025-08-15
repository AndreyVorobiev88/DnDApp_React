import React, { useState } from 'react';
import './Dice.css';
import '../Main.css';



function Dice(props) {

    const {isSelected, onSelect} = props;
    const [isHovered, setIsHovered] = useState(false);

    const imageStyle = {
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
        boxShadow: isSelected ? '0 0 10px #1C492B' : 'none',
        backgroundColor: isSelected ? '#E3ECE4' : 'transparent', 
        borderRadius: isSelected ? '15px' : '0', 
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