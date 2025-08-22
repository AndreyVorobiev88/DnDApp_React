import React from "react";
import { useState } from 'react';
import './SpellCard.css';
import '../Main.css';

import arrow from '../Resources/Arrow.svg'

function SpellCard(props) {

    const [Selected, setSelected] = useState(false);

    return (

        <div className="card_layout">
            <div className="main_div_horizontal">
                <div className="main_div_horizontal">
                    <div className="level_layout padding_10">
                        <span className="level_text ">{props.SpellLevel}</span>
                    </div>
                    <span className="big_text margin_left_10">{props.SpellName}</span>
                </div>

                <img src={arrow} alt="Arrow" className="main_cursor"

                onClick={() => {

                    (Selected) ? setSelected(false) : setSelected(true)

                }}

                />
            </div>


            <div className={`${Selected ? "visible" : "hidden"}`}>

                <div className="chapter_layout main_div_vertical">
                    <span className="header_text">Дистанция</span>
                    <span className="simple_text">{props.Distance}</span>
                </div>

                <div className="chapter_layout main_div_vertical">
                    <span className="header_text">Школа</span>
                    <span className="simple_text">{props.School}</span>
                </div>
                <div className="chapter_layout main_div_vertical">
                    <span className="header_text">Время</span>
                    <span className="simple_text">{props.Time}</span>
                </div>
                <div className="chapter_layout main_div_vertical">
                    <span className="header_text">Базовый урон</span>
                    <span className="simple_text">{props.BaseDamage}</span>
                </div>
                <div className="chapter_layout main_div_vertical">
                    <span className="header_text">Описание</span>
                    <span className="simple_text">{props.Description}</span>
                </div>

            </div>


        </div>

    )


}

export default SpellCard
