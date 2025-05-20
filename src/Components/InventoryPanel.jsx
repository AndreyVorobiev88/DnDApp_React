import React from "react";
import '../Main.css';
import './InventoryPanel.css';
import { useState } from 'react';

import StatsSkill from "./Stats_Skill";

import Bag from "../Resources/Bag.jpg"
import Scroll from "../Resources/Scroll.jpg"

import data from "../Character.json"

function InventoryPanel(props) {
    const [activeTab, setActiveTab] = useState('bag'); // 'bag' или 'scroll'
    
    console.log(data.Inventory);

    return (
        <div className="main_background main_margin inventory_panel_size main_div_vertical">
            <div className="main_div_horizontal">
                <img 
                    className={`image_size margin_20 ${activeTab === 'bag' ? '' : 'inactive_picture'}`} 
                    src={Bag} 
                    alt="Bag"
                    onClick={() => setActiveTab('bag')}
                    style={{cursor: 'pointer'}}
                />
                <img 
                    className={`image_size margin_20 ${activeTab === 'scroll' ? '' : 'inactive_picture'}`} 
                    src={Scroll} 
                    alt="Scroll"
                    onClick={() => setActiveTab('scroll')}
                    style={{cursor: 'pointer'}}
                />
            </div>

            <div className="main_div_vertical">
                {activeTab === 'bag' ? (
                    data.Inventory?.map((item, i) => (
                        <div key={i} className="text_background">
                            <span className="main_text_value">{item}</span>
                        </div>
                    ))
                ) : (
                    <textarea 
                        className="text_background main_text_value"
                        rows="20"
                        cols="40"
                        placeholder="Введите текст здесь..."
                        style={{
                            backgroundColor: '#1e1e1e',
                            color: 'white',
                            border: '1px solid #444'
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default InventoryPanel