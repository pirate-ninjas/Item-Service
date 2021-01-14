const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
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
