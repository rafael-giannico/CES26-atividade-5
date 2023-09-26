// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3002;

// Dados das cidades
const cityData = require('./cityData.json');

// Serve os arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'client/build')));

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

// Captura todas as outras rotas e retorna o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});