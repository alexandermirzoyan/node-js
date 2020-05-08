const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`URL of page ${req.url}`);
  res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
  let object = {
    model: "audi",
    speed: 245,
    wheels: 4,
  };
  res.end(JSON.stringify(object));
});

server.listen(3000, '127.0.0.1');
console.log("Server successfully started running on 3000 port");