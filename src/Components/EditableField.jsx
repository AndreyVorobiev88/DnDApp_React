import React, { useState } from "react";
import '../Main.css';

function EditableField({ value, onValueChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);

    const handleClick = () => {
        setIsEditing(true);
        setTempValue(value);
    };

    const handleSave = () => {
        onValueChange(tempValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempValue(value);
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
        <div className="">
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
                    className="editable_value" 
                    onClick={handleClick}
                    title="Click to edit"
                >
                    {value}
                </span>
            )}
        </div>
    );
}

export default EditableField;
