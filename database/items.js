const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const itemSchema = new mongoose.Schema({

  itemId: { type: Number, index: true, unique: true },
  product_id: Number,
  name: String,
  brand: {
    name: String,
    html_url: String,
  },
  model: String,
  product_rating: Number,
  price: String,
  features: String,
  tech_specs: String,
  about_brand: String,
  options_selector: {
    color: Array,
    size: Number,
    pieces_count: Number,
    item_kind: String,
    thumbnails: {
      html_url: Array,
    },
  },
  photos: Array,
  cart: {
    quantity_selector: Number,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
