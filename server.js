const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001; // Изменено на 3001

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Разрешаем запросы только с фронтенда
  methods: ['GET', 'POST', 'OPTIONS'], // Явно указываем разрешенные методы
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Проверяем и создаем папку src, если её нет
const ensureSrcDirectory = async () => {
  const srcPath = path.join(__dirname, 'src');
  try {
    await fs.access(srcPath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(srcPath);
      console.log('Created src directory');
    }
  }
};

// API endpoint to save character data
app.post('/api/save-character', async (req, res) => {
    try {
        const characterData = req.body;
        if (!characterData) {
            throw new Error('No data provided');
        }

        const filePath = path.join(__dirname, 'src', 'Character.json');
        
        // Проверяем доступ к директории
        await ensureSrcDirectory();
        
        // Write the updated character data to the JSON file
        await fs.writeFile(filePath, JSON.stringify(characterData, null, 4));
        
        console.log('Character data saved successfully to', filePath);
        res.json({ 
            success: true, 
            message: 'Character data saved successfully',
            path: filePath
        });
    } catch (error) {
        console.error('Error saving character data:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to save character data',
            error: error.message
        });
    }
});

// API endpoint to load character data
app.get('/api/load-character', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', 'Character.json');
        const data = await fs.readFile(filePath, 'utf8');
        const characterData = JSON.parse(data);
        
        res.json({
            success: true,
            data: characterData
        });
    } catch (error) {
        if (error.code === 'ENOENT') {
            // Файл не существует - возвращаем пустые данные
            res.json({
                success: true,
                data: {}
            });
        } else {
            console.error('Error loading character data:', error);
            res.status(500).json({ 
                success: false, 
                message: 'Failed to load character data',
                error: error.message
            });
        }
    }
});

// Serve static files from the React app build directory
// Должен быть после объявления API endpoints!
app.use(express.static(path.join(__dirname, 'build')));

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Проверяем доступ к папке при старте
ensureSrcDirectory().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`CORS enabled for http://localhost:3000`);
    });
}).catch(err => {
    console.error('Failed to initialize server:', err);
});