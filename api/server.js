const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');
const { json } = require('body-parser');

const app = express();
const { parsed: config } = dotenv.config();

const params = `key=${config.KEY}&cx=${config.CX}&searchType=image&imgSize=medium&q=`;
const BASE_URL = `https://www.googleapis.com/customsearch/v1?${params}`;
const PORT = global.process.env.PORT || 7000;

app.use(cors());
app.use(json());

/**
 * generate a random date in the last years
 * @returns string represet the date
 */
 const generateRandomStringDate = () => {
    let day = Math.random() * 29;
    let month = Math.random() * 11;
    let year = Math.random() * (2021 - 2000) + 2000;

    return new Date(year, month, day).toString();
}

app.get('/', async (req, res) => {
    const response = await axios.get(BASE_URL, {
        params: { q: req.query.q }
    });

    return res.send(response.data.items.map(item => ({
        title: item.title,
        link: item.link,
        date: generateRandomStringDate()
    })));
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));
