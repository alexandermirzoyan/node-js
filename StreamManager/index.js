const fs = require("fs");
const http = require("http");
// local writing files
/*let myReadShort = fs.createReadStream(`${__dirname}/article.txt`, 'utf-8');
let myWriteShort = fs.createWriteStream(`${__dirname}/bigTextWithNode.txt`);*/

/*
myReadShort.on('data', (chunk) => {
  // console.log("new data received ::: \n\n", chunk);
  console.log("new data received");
  myWriteShort.write(chunk);
});*/

// myReadShort.pipe(myWriteShort);

let server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  let myPartlyReadingText = fs.createReadStream(`${__dirname}/article.txt`, 'utf-8');
  console.log(res);
  myPartlyReadingText.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Server successfully started");