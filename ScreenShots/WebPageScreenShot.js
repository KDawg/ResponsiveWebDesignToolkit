var webPage = require('webpage');
var system = require('system');

var width, height, url, filePrefix;
var page, fileName;


if (system.args.length >= 5) {
  width = parseInt(system.args[1], 10);
  height = parseInt(system.args[2], 10);
  url = system.args[3];
  filePrefix = system.args[4];
  fileName = filePrefix + '_' + width + '_' + height + '.png';

  page = webPage.create();
  page.viewportSize = {width: width, height: height};
  page.clipRect = {top: 0, left: 0, width: width, height: height};

  page.open(url, function(status) {
    if (status === 'success') {
      page.render(fileName);
      console.log('Successfully saved web page screen shot to [' + fileName + ']');
    } else {
      console.log('Could not open the page for some reason.');
    }
    phantom.exit();
  });
} else {
  console.log('like this: phantomjs WebPageScreenShot width height url filenamePrefix');
  phantom.exit();
}
