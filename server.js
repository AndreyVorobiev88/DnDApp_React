const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint to save character data
app.post('/api/save-character', async (req, res) => {
    try {
        const characterData = req.body;
        const filePath = path.join(__dirname, 'src', 'Character.json');
        
        // Write the updated character data to the JSON file
        await fs.writeFile(filePath, JSON.stringify(characterData, null, 4));
        
        console.log('Character data saved successfully');
        res.json({ success: true, message: 'Character data saved successfully' });
    } catch (error) {
        console.error('Error saving character data:', error);
        res.status(500).json({ success: false, message: 'Failed to save character data' });
    }
});

// API endpoint to load character data
app.get('/api/load-character', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', 'Character.json');
        const data = await fs.readFile(filePath, 'utf8');
        const characterData = JSON.parse(data);
        
        res.json(characterData);
    } catch (error) {
        console.error('Error loading character data:', error);
        res.status(500).json({ success: false, message: 'Failed to load character data' });
    }
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
