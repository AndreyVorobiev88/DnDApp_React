import './App.css';
import './Main.css';

import Portrait from "./Resources/Portrait.JPG"
import Dice20 from "./Resources/Dice20.JPG"
import strength from "./Resources/Strength.jpg"
import dexterity from "./Resources/Dexterity.JPG"
import constitution from "./Resources/Constitution.JPG"
import intelligence from "./Resources/Intelligence.JPG"
import wisdom from "./Resources/Wisdom.JPG"
import charisma from "./Resources/Charisma.JPG"
import KD from "./Resources/KD.JPG"
import HP from "./Resources/HP.JPG"
import speed from "./Resources/Speed.JPG"
import initiative from "./Resources/Initiative.JPG"
import perception from './Resources/PassivePerception.JPG';
import RaceSkillSymbol from './Resources/RaceSkillSymbol.JPG';
import ClassSkillSymbol from "./Resources/ClassSkillSymbol.JPG";
import FeatureSymbol from "./Resources/FeatureSymbol.JPG"
import Bag from "./Resources/Bag.jpg"
import Scroll from "./Resources/Scroll.jpg"

import Panel from './Components/Panel_info';
import PanelStat from './Components/Panel_stat';
import data from "./Character.json"
import Badge from "./Components/Badge";
import AccordeonSpell from "./Components/AccordeonSpell";
import SpecSkillPanel from "./Components/SpecSkillPanel";
import TextArea from "./Components/TextArea.jsx"
import Divider from './Components/Divider.jsx';

const statImages = [strength, dexterity, constitution, intelligence, wisdom, charisma, perception];


function App() {
  return (

        <div className='main_padding '>

            <div className='main_div_vertical'>

                <div className='main_div_horizontal main_panel main_panel_size main_background'>

                    <div className='main_panel'>
                        <img src = {Portrait} className='main_portrait_image' alt='Portrait'></img>
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
            
            
            </div>

        </div>
        
    )
}

export default App;
