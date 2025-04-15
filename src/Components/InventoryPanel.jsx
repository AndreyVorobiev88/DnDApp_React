import React from "react";
import '../Main.css';
import './InventoryPanel.css';

import StatsSkill from "./Stats_Skill";

import Bag from "../Resources/Bag.jpg"
import Scroll from "../Resources/Scroll.jpg"

import data from "../Character.json"

function InventoryPanel(props) {

    console.log(data.Inventory)

    return (

        <div className="main_background main_margin inventory_panel_size main_div_vertical">

            <div className="main_div_horizontal ">

                <img className="image_size margin_20" src={Bag} alt="Bag"></img>
                <img className="image_size margin_20" src={Scroll} alt="Scroll"></img>

            </div>

            <div className="main_div_vertical">

                {
                    data.Inventory?.map((item, i) => (
                        <div key={i}>
                            <span>{item}</span>
                        </div>
                    ))
                }


            </div>


        </div>

    )

}

export default InventoryPanel