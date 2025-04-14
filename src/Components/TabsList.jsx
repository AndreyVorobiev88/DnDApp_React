import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabsList.css'

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
                    <h2> KURWA BOBER</h2>
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