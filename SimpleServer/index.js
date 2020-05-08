const http = require('http');

// console.log(http);

const server = http.createServer((req, res) => {
  console.log(`URL request ${req.url}`);
  res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
  res.end("Server Response ::: Hello World!" + "\n" + "Հայերեն տեքստի համար header-ում ավելացնել charset=utf-8");
});

server.listen(3000, '127.0.0.1');
console.log("Server successfully started running on 3000 port");