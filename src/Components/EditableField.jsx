import React, { useState } from "react";
import './EditableField.css';

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
        <div className="editable-field">
            {isEditing ? (
                <div className="edit-container">
                    <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="edit-input"
                        autoFocus
                    />
                    <div className="edit-buttons">
                        <button onClick={handleSave} className="save-btn">✓</button>
                        <button onClick={handleCancel} className="cancel-btn">✗</button>
                    </div>
                </div>
            ) : (
                <span 
                    className="editable-value" 
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
