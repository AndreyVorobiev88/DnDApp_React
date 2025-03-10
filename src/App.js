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

import Panel from './Components/Panel_info';
import PanelStat from './Components/Panel_stat';
import data from "./Character.json"
import Badge from "./Components/Badge";
import AccordeonSpell from "./Components/AccordeonSpell";


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
                    <PanelStat Picture={strength} StatName={data.Stats[0].StatName} Value={data.Stats[0].Value}
                    Bonus={data.Stats[0].Bonus} />

                    <PanelStat Picture={dexterity} StatName={data.Stats[1].StatName} Value={data.Stats[1].Value}
                    Bonus={data.Stats[1].Bonus} />

                    <PanelStat Picture={constitution} StatName={data.Stats[2].StatName} Value={data.Stats[2].Value}
                    Bonus={data.Stats[2].Bonus} />

                    <PanelStat Picture={intelligence} StatName={data.Stats[3].StatName} Value={data.Stats[3].Value}
                    Bonus={data.Stats[3].Bonus} />

                    <PanelStat Picture={wisdom} StatName={data.Stats[4].StatName} Value={data.Stats[4].Value}
                    Bonus={data.Stats[4].Bonus} />

                    <PanelStat Picture={charisma} StatName={data.Stats[5].StatName} Value={data.Stats[5].Value}
                    Bonus={data.Stats[5].Bonus} />

                    <PanelStat Picture={perception} StatName={data.Stats[6].StatName} Value={data.Stats[6].Value}
                     />

                </div>

                <div>

                    <AccordeonSpell></AccordeonSpell>

                </div>

            </div>

            
        </div>

        
    )
}

export default App;
