import './App.css';
import Necromancer from "./Resources/Necromancer.JPG"
import strength from "./Resources/Strength.jpg"
import dexterity from "./Resources/Dexterity.JPG"
import constitution from "./Resources/Constitution.JPG"
import intelligence from "./Resources/Intelligence.JPG"
import wisdom from "./Resources/Wisdom.JPG"
import charisma from "./Resources/Charisma.JPG"

import Panel from './Components/Panel_info';
import PanelStat from './Components/Panel_stat';
import data from "./Character.json"


function App() {
  return (

        <div id="main" className="main_div_style">

            <div>
                <img src = {Necromancer} className={"image_radius"} alt = "portrait"></img>
            </div>
            <div>
                <Panel Name={data.Name} Race={data.Race} ClassName={data.ClassName} SubClass={data.SubClass} Outlook={data.Outlook} Level={data.Level} 
                SkillLevel={data.SkillLevel}/>
            </div>
            <div>
                <div>
                    <PanelStat Picture={strength} StatName={data.Stats[0].StatName} Value={data.Stats[0].Value}
                    Bonus={data.Stats[0].Bonus} />
                </div>
                <div>
                    <PanelStat Picture={dexterity} StatName={data.Stats[1].StatName} Value={data.Stats[1].Value}
                    Bonus={data.Stats[1].Bonus} />
                </div>
                <div>
                    <PanelStat Picture={constitution} StatName={data.Stats[2].StatName} Value={data.Stats[2].Value}
                    Bonus={data.Stats[2].Bonus} />
                </div>
                <div>
                    <PanelStat Picture={intelligence} StatName={data.Stats[3].StatName} Value={data.Stats[3].Value}
                    Bonus={data.Stats[3].Bonus} />
                </div>
                <div>
                    <PanelStat Picture={wisdom} StatName={data.Stats[4].StatName} Value={data.Stats[4].Value}
                    Bonus={data.Stats[4].Bonus} />
                </div>
                <div>
                    <PanelStat Picture={charisma} StatName={data.Stats[5].StatName} Value={data.Stats[5].Value}
                    Bonus={data.Stats[5].Bonus} />
                </div>
            </div>


        </div>

        
    )
}

export default App;
