/* eslint-disable no-param-reassign */
const faker = require('faker');

const Item = require('./items.js');

const colorsSourceArr = [
  'yellow', 'black', 'tan', 'cyan', 'magenta', 'mint green', 'pink', 'purple', 'gold', 'lime', 'turquoise', 'blue', 'salmon', 'azure', 'lavender', 'teal', 'sky blue', 'white', 'olive', 'grey', 'red', 'silver', 'orange'];

const thumbnailsArr = [
  'https://source.unsplash.com/enDaxoMxqEw/104x78',
  'https://source.unsplash.com/a3Y8K0-DI8M/104x78',
  'https://source.unsplash.com/FtZ0qrRnuS0/104x78',
  'https://source.unsplash.com/UQfdObKFl4Q/104x78',
  'https://source.unsplash.com/sFXJnueBNDo/104x78',
  'https://source.unsplash.com/3BDtb6DEXFk/104x78',
  'https://source.unsplash.com/mYn4bfLh2ic/104x78',
  'https://source.unsplash.com/8S7ZoRyYOTY/104x78',
];

const getRandomIntInclusive = (min, max) => {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = (arr) => {
  const result = [];
  for (let i = 0; result.length <= 10; i += 1) {
    const bin = arr[getRandomIntInclusive(0, 22)];
    if (!result.includes(bin)) {
      result.push(bin);
    }
  }
  return result;
};

const seedData = [];

let id = 0;

while (id < 100) {
  const seedItem = new Item({
    itemId: id,
    product_id: faker.random.number({ min: 10000, max: 99999 }),
    name: faker.commerce.productName(),
    brand: {
      name: faker.company.companyName(),
      html_url: faker.internet.url(),
    },
    model: faker.commerce.product(),
    product_rating: faker.finance.amount(0, 4, 1),
    price: faker.commerce.price(1, 500, 2, '$'),
    features: faker.commerce.productDescription(),
    tech_specs: faker.commerce.productAdjective(),
    about_brand: faker.company.bs(),
    options_selector: {
      color: colors(colorsSourceArr),
      size: faker.random.number({ min: 1, max: 12 }),
      pieces_count: faker.random.number(1, 100),
      item_kind: faker.commerce.productMaterial(),
      thumbnails: {
        html_url: thumbnailsArr,
      },
    },
    photos: [
      'https://source.unsplash.com/enDaxoMxqEw/764x554',
      'https://source.unsplash.com/a3Y8K0-DI8M/764x554',
      'https://source.unsplash.com/FtZ0qrRnuS0/764x554',
      'https://source.unsplash.com/UQfdObKFl4Q/764x554',
      'https://source.unsplash.com/sFXJnueBNDo/764x554',
      'https://source.unsplash.com/3BDtb6DEXFk/764x554',
      'https://source.unsplash.com/mYn4bfLh2ic/764x554',
      'https://source.unsplash.com/8S7ZoRyYOTY/764x554',
    ],
    cart: {
      quantity_selector: faker.random.number({ min: 1, max: 10 }),
    },
  });
  id += 1;
  seedData.push(seedItem);
}

const seedDB = () => {
  Item.create(seedData)
    .then(() => {
      console.log('DB Seed Successful');
      process.exit();
    })
    .catch((err) => {
      console.log(err);
    });
};

seedDB();
