import './App.css';
import './Main.css';
import React, { useState, useEffect } from 'react';

import Portrait from "./Resources/Portrait.JPG"
import KD from "./Resources/KD.JPG"
import HP from "./Resources/HP.JPG"
import speed from "./Resources/Speed.JPG"
import initiative from "./Resources/Initiative.JPG"

import Panel from './Components/Panel_info';
import EditableBadge from "./Components/EditableBadge";
import TabsList from './Components/TabsList.jsx'
import InventoryPanel from './Components/InventoryPanel.jsx';
import MainDice from './Components/MainDice.jsx';


function App() {
    const [data, setData] = useState();

    // Load data from localStorage on component mount
    useEffect(() => {

        const func = async function () {
            const savedData = await loadCharacterData();
            console.log({savedData});
            if (savedData) {
                try {
                    //const parsedData = JSON.parse(savedData);
                    setData(savedData.data);
                } catch (error) {
                    console.error('Error parsing saved character data:', error);
                }
            }
        }

        func();

    }, []);


    const handleValueChange = async (fieldName, newValue) => {
        const updatedData = { ...data, [fieldName]: newValue };
        setData(updatedData);
        await saveCharacterData(updatedData);
    };

    const handleStatChange = async (fieldName, newValue) => {
        const updatedData = { ...data };
        updatedData.Stats = [...data.Stats];
        const a = updatedData.Stats.findIndex(s => s.StatName === fieldName);
        const stat = { ...updatedData.Stats[a]};
        stat.Value = newValue;
        updatedData.Stats[a] = stat;
        setData(updatedData);

        console.log({updatedData, fieldName, newValue});

        await saveCharacterData(updatedData);
    };

    const handleStatBonusChange = async (statName, newValue) => {
        const updatedData = { ...data };
        updatedData.Stats = [...data.Stats];
        const statIndex = updatedData.Stats.findIndex(s => s.StatName === statName);
        
        if (statIndex >= 0) {
            const stat = { ...updatedData.Stats[statIndex] };
            stat.Bonus = newValue;
            updatedData.Stats[statIndex] = stat;
            setData(updatedData);
            await saveCharacterData(updatedData);
        }
    };
    
    const saveCharacterData = async (updatedData) => {
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
                localStorage.setItem('characterData', JSON.stringify(updatedData));
            }
        } catch (error) {
            console.error('Error saving character data:', error);
            localStorage.setItem('characterData', JSON.stringify(updatedData));
        }
    };


    const loadCharacterData = async () => {
        try {
            const response = await fetch('/api/load-character', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            
            if (!response.ok) {
                console.error('Failed to load character data');
            }

            return response.json(); 

        } catch (error) {
            console.error('Error loading character data:', error);
        }

    };


  return data ? (

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

                    <MainDice/>

                    <div className='main_div_horizontal main_space_between secondary_background main_panel'>

                        <EditableBadge 
                            Picture={KD} 
                            Value={data.KD} 
                            onValueChange={handleValueChange}
                            fieldName="KD"
                        />

                        <EditableBadge 
                            Picture={HP} 
                            Value={data.HP}
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


                <TabsList 
                    data={data} 
                    onStatChange={handleStatChange}
                    onStatBonusChange={handleStatBonusChange}
                />

            </div>
        </div>

        <InventoryPanel></InventoryPanel>

    </div>
        
    ) : "Loading";
}

export default App;
