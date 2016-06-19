var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join('dist'), { push: false }, function(err) {
  console.log(err);
});
