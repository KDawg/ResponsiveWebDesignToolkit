
var TARGETS = [{
    url: 'http://www.threethumbisland.com',
    width: 1280,
    height: 1280,
    fileName: '3Thumb'
  }, {
    url: 'http://www.threethumbisland.com',
    width: 1024,
    height: 1280,
    fileName: '3Thumb'
  }, {
    url: 'http://www.threethumbisland.com',
    width: 768,
    height: 1280,
    fileName: '3Thumb'
  }, {
    url: 'http://www.threethumbisland.com',
    width: 320,
    height: 1280,
    fileName: '3Thumb'
  }];

var spawn = require('child_process').spawn;
var numFinished = 0;


TARGETS.forEach(function shootTarget(target, index, array) {
  var child;

  child = spawn('phantomjs', ['WebPageScreenShot.js',
    target.width, target.height, target.url, target.fileName]);

  child.stdout.on('data', function (data) {
    console.log(data);
  });

  child.on('exit', function () {
    numFinished += 1;
    if (numFinished === TARGETS.length) {
      phantom.exit(0);
    }
  });
});
