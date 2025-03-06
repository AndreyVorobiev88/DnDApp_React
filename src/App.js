import './App.css';
import "./CharacterComponent.css" 
import Necromancer from "./Resources/Necromancer.JPG"

function App() {
  return (
    <div id="main" className="main_div_style">

        <div className="main_div_style">
            <img src = {Necromancer} className={"image_radius"} alt = "portrait"></img>
        </div>

        <div className="main_div_style">           
            
            "Some text"  </div>

        </div>
        
)
}

export default App;
