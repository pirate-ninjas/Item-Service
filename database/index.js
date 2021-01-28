const mongoose = require('mongoose');

const mongoUri = 'mongodb://datbase/items';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = db;
