import './App.css';
import './Main.css';
import React, { useState, useEffect } from 'react';

import Portrait from "./Resources/Portrait.JPG"
import Dice20 from "./Resources/Dice20.JPG"
import KD from "./Resources/KD.JPG"
import HP from "./Resources/HP.JPG"
import speed from "./Resources/Speed.JPG"
import initiative from "./Resources/Initiative.JPG"

import Panel from './Components/Panel_info';
import initialData from "./Character.json"
import Badge from "./Components/Badge";
import EditableBadge from "./Components/EditableBadge";
import TabsList from './Components/TabsList.jsx'
import InventoryPanel from './Components/InventoryPanel.jsx';


function App() {
    const [data, setData] = useState(initialData);

    // Load data from localStorage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem('characterData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                setData(parsedData);
            } catch (error) {
                console.error('Error parsing saved character data:', error);
            }
        }
    }, []);

    const handleValueChange = async (fieldName, newValue) => {
        const updatedData = { ...data, [fieldName]: newValue };
        setData(updatedData);
        
        // Save to file
        try {
            const response = await fetch('/api/save-character', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            
            if (!response.ok) {
                console.error('Failed to save character data');
                // Fallback: save to localStorage
                localStorage.setItem('characterData', JSON.stringify(updatedData));
            }
        } catch (error) {
            console.error('Error saving character data:', error);
            // Fallback: save to localStorage
            localStorage.setItem('characterData', JSON.stringify(updatedData));
        }
    };
  return (

    <div className='main_div_horizontal_simple '>
        <div className='main_padding'>

            <div className='main_div_vertical '>

                <div className='main_div_horizontal main_panel main_panel_size main_background'>

                    <div>
                        <img src={Portrait} className='main_portrait_image' alt='Portrait'/> 
                        <span className='portrait_text_above_image main_text_value'>{data.Name}</span>
                        <span className='level_text_above_image main_text_value'>{data.Level} ур.</span>

                    </div>

                    <Panel 
                        Race={data.Race} 
                        ClassName={data.ClassName} 
                        SubClass={data.SubClass} 
                        Outlook={data.Outlook} 
                        SkillLevel={data.SkillLevel}
                        Size={data.Size}    
                    />

                    <div className='main_div_horizontal main_padding'>
                    
                        <img src = {Dice20} className='dice_image' alt='Dice'></img>

                    </div>

                    <div className='main_div_horizontal main_space_between secondary_background main_panel'>

                        <EditableBadge 
                            Picture={KD} 
                            Value={data.KD} 
                            onValueChange={handleValueChange}
                            fieldName="KD"
                        />

                        <EditableBadge 
                            Picture={HP} 
                            Value={data.HP + "/" + data.HP}
                            onValueChange={handleValueChange}
                            fieldName="HP"
                        />

                        <EditableBadge 
                            Picture={speed} 
                            Value={data.Speed}
                            onValueChange={handleValueChange}
                            fieldName="Speed"
                        />

                        <EditableBadge 
                            Picture={initiative} 
                            Value={data.Initiative}
                            onValueChange={handleValueChange}
                            fieldName="Initiative"
                        />


                    </div>
                
                </div>


                <TabsList/>

                            
            
            </div>
            </div>

            <InventoryPanel></InventoryPanel>



        </div>
        
    )
}

export default App;
