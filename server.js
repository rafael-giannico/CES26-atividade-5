// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

// Dados das cidades
const cityData = require('./cityData.json');

app.use(express.static('public'));

// Rota para obter dados da cidade

app.get('/city/:name', (req, res) => {
    const cityName = req.params.name;
    const data = cityData[cityName];
    if (data) {
      res.json(data);
    } else {
      res.status(404).send('City not found');
    }
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
