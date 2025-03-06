import './App.css';
import Necromancer from "./Resources/Necromancer.JPG"
import './Components/Panel'
import { Panel } from './Components/Panel';


function App() {
  return (
    <div id="main" className="main_div_style">

        <div className="main_div_style">
            <img src = {Necromancer} className={"image_radius"} alt = "portrait"></img>
        </div>

        <div className="main_div_style">           
            "Some text"  
            <Panel></Panel>
        </div>

    </div>
        
    )
}

export default App;
