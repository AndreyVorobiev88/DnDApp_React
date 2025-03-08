import './App.css';
import Portrait from "./Resources/Portrait.JPG"
import strength from "./Resources/Strength.jpg"
import dexterity from "./Resources/Dexterity.JPG"
import constitution from "./Resources/Constitution.JPG"
import intelligence from "./Resources/Intelligence.JPG"
import wisdom from "./Resources/Wisdom.JPG"
import charisma from "./Resources/Charisma.JPG"
import KD from "./Resources/KD.JPG"
import HP from "./Resources/HP.JPG"

import Panel from './Components/Panel_info';
import PanelStat from './Components/Panel_stat';
import data from "./Character.json"
import Badge from './Components/Badge';


function App() {
  return (

        <div id="main" className="main_div_style">

                <div ClassName="div_vertical">
                    <img src = {Portrait} className={"image_radius"} alt = "portrait"></img>
                    <div className='main_div_style'>
                        <Badge Picture={KD} Value={data.KD}></Badge>
                        <Badge Picture={HP} Value={data.HP + "/" + data.HP}></Badge>
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

                </div>


        </div>

        
    )
}

export default App;
