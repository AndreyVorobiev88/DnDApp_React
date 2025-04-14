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

import data from "../Character.json"

import PanelStat from './Panel_stat';


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

                <TabPanel className={"border_tab_stats"}>
                    {data.Stats.map((stat) => (

                    <PanelStat 
                        key={stat.StatName}
                        Stat={stat} 
                        Image={statImages[data.Stats.indexOf(stat)]}
                    />
                    ))
                    }
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>

    
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>            

            </Tabs>

        </div>


    )

}

export default TabsList