import './App.css';
import Necromancer from "./Resources/Necromancer.JPG"
import Panel from './Components/Panel';
import data from "./Character.json"


function App() {
  return (
    <div id="main" className="main_div_style">

        <div>
            <img src = {Necromancer} className={"image_radius"} alt = "portrait"></img>
        </div>

        <div>           
            <Panel Name={data.Name} Race={data.Race} ClassName={data.ClassName} SubClass={data.SubClass} Outlook={data.Outlook} Level={data.Level} 
            SkillLevel={data.SkillLevel}></Panel> 
        </div>
    </div>
        
    )
}

export default App;
