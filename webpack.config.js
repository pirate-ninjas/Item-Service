const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client', 'src');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', 'airbnb'],
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
