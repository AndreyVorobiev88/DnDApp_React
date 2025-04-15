import './App.css';
import './Main.css';

import Portrait from "./Resources/Portrait.JPG"
import Dice20 from "./Resources/Dice20.JPG"
import KD from "./Resources/KD.JPG"
import HP from "./Resources/HP.JPG"
import speed from "./Resources/Speed.JPG"
import initiative from "./Resources/Initiative.JPG"

import Panel from './Components/Panel_info';
import data from "./Character.json"
import Badge from "./Components/Badge";
import TabsList from './Components/TabsList.jsx'
import InventoryPanel from './Components/InventoryPanel.jsx';


function App() {
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

                        <Badge Picture={KD} Value={data.KD}></Badge>
                        <Badge Picture={HP} Value={data.HP + "/" + data.HP}></Badge>
                        <Badge Picture={speed} Value={data.Speed}></Badge>
                        <Badge Picture={initiative} Value={data.Initiative}></Badge>

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
