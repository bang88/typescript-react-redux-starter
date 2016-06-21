/* eslint-disable */
var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join('dist'), { push: true }, function(err) {
  console.log(err || 'publish to gh-pages done.');
});
