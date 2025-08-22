import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabsList.css'

import strength from "../Resources/Strength.jpg"
import dexterity from "../Resources/Dexterity.JPG"
import constitution from "../Resources/Constitution.JPG"
import intelligence from "../Resources/Intelligence.JPG"
import wisdom from "../Resources/Wisdom.JPG"
import charisma from "../Resources/Charisma.JPG"
import perception from '../Resources/PassivePerception.JPG';
import RaceSkillSymbol from '../Resources/RaceSkillSymbol.JPG';
import ClassSkillSymbol from "../Resources/ClassSkillSymbol.JPG";
import FeatureSymbol from "../Resources/FeatureSymbol.JPG"

import data from "../Character.json"

import PanelStat from './Panel_stat';
import SpecSkillPanel from "./SpecSkillPanel";
import AccordeonSpell from "./AccordeonSpell";
import SpellCard from "./SpellCard";


const statImages = [strength, dexterity, constitution, intelligence, wisdom, charisma, perception];

function TabsList(props) {

    return (
        <div className='main_panel_size main_margin_top'>
            <Tabs >
                
                <TabList>
                    <Tab > <span className={"tabs_text"}>Характеристики</span></Tab>

                    <Tab><span className={"tabs_text"}>Навыки</span></Tab>

                    <Tab><span className={"tabs_text"}>Умения</span></Tab>

                </TabList>

                <TabPanel>
                    <div  className={"border_tab_stats"}>
                        {

                        data.Stats.map((stat, index) => (

                        <PanelStat 
                            key={stat.StatName}
                            Stat={stat} 
                            Image={statImages[data.Stats.indexOf(stat)]}
                            isColored={index % 2 === 0}
                            onStatChange={props.onStatChange}
                            onStatBonusChange={props.onStatBonusChange}
                        />
                        ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className={"align_top"}>
                        <SpecSkillPanel SpecSkillSymbol={RaceSkillSymbol} SpecSkills={data.RaceSkills}/>
                        <SpecSkillPanel SpecSkillSymbol={ClassSkillSymbol} SpecSkills={data.ClassSkills}/>
                        <SpecSkillPanel SpecSkillSymbol={FeatureSymbol} SpecSkills={data.Features}/>
                    </div>
                </TabPanel>

    
                <TabPanel>
                    <AccordeonSpell Spells={data.Spells} />
                </TabPanel>            

            </Tabs>

        </div>


    )

}

export default TabsList