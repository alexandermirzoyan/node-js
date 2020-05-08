const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  let myPartlyHTML = fs.createReadStream(`${__dirname}/index.html`, 'utf-8');
  myPartlyHTML.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Server successfully started running on 3000 port");