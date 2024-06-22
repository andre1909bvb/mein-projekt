const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Route für Liga-Spiele
app.get('/league-matches', async (req, res) => {
  const { key, season_id } = req.query;
  try {
    const response = await axios.get(`https://api.football-data-api.com/league-matches`, {
      params: { key, season_id }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Liga-Spiele:', error);
    res.status(500).send('Interner Serverfehler');
  }
});

// Route für einzelne Spiele
app.get('/match', async (req, res) => {
  const { key, match_id } = req.query;
  try {
    const response = await axios.get(`https://api.football-data-api.com/match`, {
      params: { key, match_id }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Fehler beim Abrufen des Spiels:', error);
    res.status(500).send('Interner Serverfehler');
  }
});

// Route für Teamdaten
app.get('/team', async (req, res) => {
  const { key, team_id } = req.query;
  try {
    const response = await axios.get(`https://api.football-data-api.com/team`, {
      params: { key, team_id }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Teamdaten:', error);
    res.status(500).send('Interner Serverfehler');
  }
});

// Route für Ligasaison
app.get('/league-season', async (req, res) => {
  const { key, season_id } = req.query;
  try {
    const response = await axios.get(`https://api.football-data-api.com/league-season`, {
      params: { key, season_id }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Ligasaison:', error);
    res.status(500).send('Interner Serverfehler');
  }
});

// Route für Ligatabelle
app.get('/league-tables', async (req, res) => {
  const { key, season_id } = req.query;
  try {
    const response = await axios.get(`https://api.football-data-api.com/league-tables`, {
      params: { key, season_id }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Ligatabelle:', error);
    res.status(500).send('Interner Serverfehler');
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

module.exports = app;
