var URL = 'http://www.threethumbisland.com/';
var WIDTH = 1024;
var HEIGHT = 2048;

var webPage = require('webpage');
var page = webPage.create();
var fileName = '3thumb' + '_' + WIDTH + '_' + HEIGHT + '.png';


page.viewportSize = {width: WIDTH, height: HEIGHT};
page.open(URL, function(status) {
  if (status === 'success') {
    page.render(fileName);
    console.log('Successfully saved web page screen shot to [' + fileName + ']');
  } else {
    console.log('Could not open the page for some reason.');
  }
  phantom.exit();
});
