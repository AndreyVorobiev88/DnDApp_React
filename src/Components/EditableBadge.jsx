import React, { useState } from "react";
import './Badge.css';
import './EditableBadge.css';
import '../Main.css'

function EditableBadge({ Picture, Value, onValueChange, fieldName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(Value);

    const handleClick = () => {
        setIsEditing(true);
        setTempValue(Value);
    };

    const handleSave = () => {
        onValueChange(fieldName, tempValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempValue(Value);
        setIsEditing(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <div className="main_div_vertical align_center main_padding">
            <img src={Picture} className="image_badge" alt=""></img>
            
            {isEditing ? (
                <div className="edit_container">
                    <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="edit_input"
                        autoFocus
                    />
                    <div className="edit_buttons">
                        <button onClick={handleSave} className="save_btn">✓</button>
                        <button onClick={handleCancel} className="cancel_btn">✗</button>
                    </div>
                </div>
            ) : (
                <span 
                    className="main_text_info text_larger editable_value" 
                    onClick={handleClick}
                    title="Нажмите для редактирования"
                >
                    {Value}
                </span>
            )}
        </div>
    );
}

export default EditableBadge;
