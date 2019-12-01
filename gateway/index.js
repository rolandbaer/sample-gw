const http = require('http');
const url = require('url');
const port = 4001;

const server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<html><body>');
  if(req.url.length > 1) {
    var parsedUrl = url.parse(req.url, true);
    if(parsedUrl.query.text != undefined) {
      console.log(parsedUrl.query.text);
      var textLength = parsedUrl.query.text.length;
      http.request("http://127.0.0.1:3001/?length=" + textLength, (res) => { console.log(res.statusCode); }).end();
   res.write('<p>OK</p>');
    }
  } 

  res.write('<form action="/"><input name="text" size="100" /></form>');
  res.write('</body></html>');
  res.end();
});

server.listen(port, () => {
    console.log('Gateway is available under http://127.0.0.1:' + port + '/');
});
