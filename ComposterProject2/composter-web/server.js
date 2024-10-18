const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
const app = express();
const PORT = process.env.PORT || 5000;
const PASSWORD = 'password123';

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Compost Data Endpoints
app.post('/submit-compost-data', (req, res) => {
  const newData = req.body;
  fs.readFile('data/compostData.json', (err, data) => {
    if (err) throw err;
    let compostData = JSON.parse(data);
    compostData.push(newData);
    fs.writeFile('data/compostData.json', JSON.stringify(compostData), (err) => {
      if (err) throw err;
      res.send('Data saved successfully');
    });
  });
});

app.post('/reset-data', (req, res) => {
  const { password, type } = req.body;
  if (password === PASSWORD) {
    let file = type === 'compost' ? 'data/compostData.json' : 'data/foodScrapData.json';
    fs.writeFile(file, '[]', (err) => {
      if (err) throw err;
      res.send('Data reset successfully');
    });
  } else {
    res.status(403).send('Unauthorized');
  }
});

app.post('/import-data', (req, res) => {
  const { password, type, data } = req.body;
  if (password === PASSWORD) {
    let file = type === 'compost' ? 'data/compostData.json' : 'data/foodScrapData.json';
    fs.writeFile(file, JSON.stringify(data), (err) => {
      if (err) throw err;
      res.send('Data imported successfully');
    });
  } else {
    res.status(403).send('Unauthorized');
  }
});

app.get('/compost-data', (req, res) => {
  fs.readFile('data/compostData.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Food Scrap Data Endpoints
app.post('/submit-food-scrap-data', (req, res) => {
  const newData = req.body;
  fs.readFile('data/foodScrapData.json', (err, data) => {
    if (err) throw err;
    let foodScrapData = JSON.parse(data);
    foodScrapData.push(newData);
    fs.writeFile('data/foodScrapData.json', JSON.stringify(foodScrapData), (err) => {
      if (err) throw err;
      res.send('Data saved successfully');
    });
  });
});

app.get('/food-scrap-data', (req, res) => {
  fs.readFile('data/foodScrapData.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Plant Data Endpoints
app.post('/submit-plant-data', (req, res) => {
  const newData = req.body;
  fs.readFile('data/plantData.json', (err, data) => {
    if (err) throw err;
    let plantData = JSON.parse(data);
    plantData.push(newData);
    fs.writeFile('data/plantData.json', JSON.stringify(plantData), (err) => {
      if (err) throw err;
      res.send('Plant data saved successfully');
    });
  });
});

app.post('/reset-plant-data', (req, res) => {
  const { password } = req.body;
  if (password === PASSWORD) {
    fs.writeFile('data/plantData.json', '[]', (err) => {
      if (err) throw err;
      res.send('Plant data reset successfully');
    });
  } else {
    res.status(403).send('Unauthorized');
  }
});

app.post('/import-plant-data', (req, res) => {
  const { password, data } = req.body;
  if (password === PASSWORD) {
    fs.writeFile('data/plantData.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      res.send('Plant data imported successfully');
    });
  } else {
    res.status(403).send('Unauthorized');
  }
});

app.get('/plant-data', (req, res) => {
  fs.readFile('data/plantData.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Backup data daily
cron.schedule('0 0 * * *', () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = `data/backups/${timestamp}`;
  if (!fs.existsSync(backupDir)){
    fs.mkdirSync(backupDir);
  }
  const backupCompostData = `${backupDir}/compostData.json`;
  const backupFoodScrapData = `${backupDir}/foodScrapData.json`;
  const backupPlantData = `${backupDir}/plantData.json`;

  fs.copyFile('data/compostData.json', backupCompostData, (err) => {
    if (err) throw err;
    console.log('Compost data backed up');
  });

  fs.copyFile('data/foodScrapData.json', backupFoodScrapData, (err) => {
    if (err) throw err;
    console.log('Food scrap data backed up');
  });

  fs.copyFile('data/plantData.json', backupPlantData, (err) => {
    if (err) throw err;
    console.log('Plant data backed up');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Trigger new build
"// Trigger new build" 
