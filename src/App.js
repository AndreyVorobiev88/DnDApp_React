import './App.css';
import './Main.css';

import Portrait from "./Resources/Portrait.JPG"
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
import SpecSkillSymbol from './Resources/SpecSkillSymbol.JPG';

import Panel from './Components/Panel_info';
import PanelStat from './Components/Panel_stat';
import data from "./Character.json"
import Badge from "./Components/Badge";
import AccordeonSpell from "./Components/AccordeonSpell";
import SpecSkillPanel from "./Components/SpecSkillPanel"


const statImages = [strength, dexterity, constitution, intelligence, wisdom, charisma, perception];


function App() {
  return (

        <div>
            <div id="main" className="main_div_horizontal">

                <div ClassName="main_div_vertical main_panel">
                    <img src = {Portrait} className={"main_panel"} alt = "portrait"></img>
                    <div className='main_div_horizontal'>
                        <Badge Picture={KD} Value={data.KD}></Badge>
                        <Badge Picture={HP} Value={data.HP + "/" + data.HP}></Badge>
                        <Badge Picture={speed} Value={data.Speed}></Badge>
                        <Badge Picture={initiative} Value={data.Initiative}></Badge>
                    </div>

                </div>
                    <Panel 
                        Name={data.Name} 
                        Race={data.Race} 
                        ClassName={data.ClassName} 
                        SubClass={data.SubClass} 
                        Outlook={data.Outlook} 
                        Level={data.Level} 
                        SkillLevel={data.SkillLevel}
                        Size={data.Size}
                        
                    />

                <div>
                    
                    {data.Stats.map((stat) => (

                        <PanelStat 
                            Stat={stat} 
                            Image={statImages[data.Stats.indexOf(stat)]}
                        />
                    ))
                    }


                </div>

                <SpecSkillPanel SpecSkillSymbol={SpecSkillSymbol}></SpecSkillPanel>

            </div>
            <div>
                <AccordeonSpell Spells={data.Spells} />
            </div>
            
        </div>

        
    )
}

export default App;
