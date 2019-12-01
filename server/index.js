const http = require('http');
const url = require('url');
const port = 3001;

const server = http.createServer(function(req, res) {
  if(req.url.length > 1) {
    var parsedUrl = url.parse(req.url, true);
    if(parsedUrl.query.length != undefined) {
      console.log(parsedUrl.query.length);
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write('OK');
    }
  } 

  res.end();
});

server.listen(port, () => {
    console.log('Server is available under http://127.0.0.1:' + port + '/');
});
