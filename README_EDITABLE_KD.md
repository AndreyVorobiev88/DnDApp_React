# Editable KD Feature

This update adds the ability to dynamically edit the KD (Armor Class) value in your D&D character sheet application.

## Features Added

1. **EditableBadge Component**: A new React component that allows clicking on the KD value to edit it inline
2. **Data Persistence**: Changes are automatically saved to localStorage and optionally to the Character.json file
3. **Server Integration**: A Node.js/Express server to handle saving data to the JSON file

## How to Use

### Starting the Application

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start both the React app and server**:
   ```bash
   npm run dev
   ```
   
   Or start them separately:
   ```bash
   # Terminal 1 - Start the server
   npm run server
   
   # Terminal 2 - Start the React app
   npm start
   ```

### Editing the KD Value

1. **Click on the KD value** in the character sheet
2. **Enter the new value** in the input field that appears
3. **Save your changes** by:
   - Pressing Enter
   - Clicking the green checkmark (✓) button
4. **Cancel editing** by:
   - Pressing Escape
   - Clicking the red X (✗) button

### Data Persistence

- **Automatic saving**: Changes are automatically saved when you confirm an edit
- **localStorage backup**: If the server is not running, data is saved to browser localStorage
- **File persistence**: When the server is running, changes are saved to `src/Character.json`

## Technical Details

### New Files Created

- `src/Components/EditableBadge.jsx` - The editable badge component
- `src/Components/EditableBadge.css` - Styling for the editable badge
- `server.js` - Express server for handling file operations
- `README_EDITABLE_KD.md` - This documentation file

### Modified Files

- `src/App.js` - Updated to use EditableBadge and handle data persistence
- `package.json` - Added server dependencies and scripts

### API Endpoints

- `POST /api/save-character` - Saves character data to JSON file
- `GET /api/load-character` - Loads character data from JSON file

## Troubleshooting

1. **Server not starting**: Make sure all dependencies are installed with `npm install`
2. **Changes not saving to file**: Check if the server is running on port 3001
3. **Data not persisting**: Check browser console for errors and ensure localStorage is enabled

## Future Enhancements

This pattern can be extended to make other character attributes editable:
- HP (Hit Points)
- Speed
- Initiative
- Stats (Strength, Dexterity, etc.)
- Skills and bonuses
