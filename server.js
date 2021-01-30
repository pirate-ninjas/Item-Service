const express = require('express');
const path = require('path');
const compression = require('compression');
const Item = require('./database/items.js');

const app = express();
app.use(compression());
const PORT = 1000;
const PUBLIC_DIR = path.resolve(__dirname, 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.url}`);
  next();
});

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

app.get('/api/products/:itemId/item', (req, res) => {
  const itemId = req.params;
  Item.find(itemId)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => res.send(err));
});
