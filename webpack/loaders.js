'use strict';
const path = require('path');
const sources = path.resolve("./src");
console.log(sources)
exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint',
  include: [
    sources
  ],
};

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader',
  include:  [
    sources
  ],
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  include:  [
    sources
  ],
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader',
  exclude: /node_modules/,
};

exports.image = makeUrlLoader(/\.(png|jpg)$/);
exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url',
    exclude: /node_modules/,
  };
}
