const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`URL request ${req.url}`);
  if (req.url === "/" || req.url === "/index") {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    fs.createReadStream(`${__dirname}/index.html`).pipe(res);
  }
  else if(req.url === "/about") {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    fs.createReadStream(`${__dirname}/about.html`).pipe(res);
  }
  else {
    res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
    fs.createReadStream(`${__dirname}/notFound.html`).pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log("Server successfully started running on 3000 port");