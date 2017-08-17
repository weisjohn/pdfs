
// TODO: cli injection
var pages = ['/', '/about'];

var url = 'http://localhost:8889';

pages.forEach(function(name) {
  var page = require('webpage').create();
  page.viewportSize = { width: 1280, height: 1 };

  console.log('url + name', url + name)

  page.open(url + name, function(err) {
    if (err) console.log(err);
    setTimeout(function() {
      console.log('render ' + name);
      page.render('pdfs' + name + '.pdf');
    }, 10e3);
  });
});


setTimeout(function() { phantom.exit(); } , 20e3);
