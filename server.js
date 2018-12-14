const express = require('express');
const bodyParser = require('body-parser');
const apiKey = '';
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/results', (req, res) => {
  axios
    .get('https://api.yelp.com/v3/businesses/search', {
      params: {
        term: 'food',
        latitude: req.query.lat,
        longitude: req.query.lng,
        radius: 800,
        limit: 20
      },
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(({ data }) => res.json(data))
    .catch(er => console.log(er));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
