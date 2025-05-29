const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
const PORT = 5000;

app.get('/api/matches', async (req, res) => {
    const API_URL = 'https://v1.basketball.api-sports.io/games?date=2025-05-30';
    const API_KEY = process.env.BASKETBALL_API_KEY;

    try {
        const response = await fetch(API_URL, {
            headers: { 'x-apisports-key': API_KEY }
        });

        const data = await response.json();
        console.log(data);

        const matches = data.response.map(game => ({
            homeTeam: game.teams.home.name,
            awayTeam: game.teams.away.name,
            date: game.date,
            status: game.status.long,
            venue: game.venue,
            league: game.league.name
        }));
        res.json(matches);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch matches' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
