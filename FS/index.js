// Synchronized reading and writing
/*
let fs = require('fs');

let readedFile = fs.readFileSync('text.txt', 'utf-8');
console.log(readedFile);

let message = `Sending text and text.txt content ::: \n${readedFile}`;
fs.writeFileSync('some_new_file_with_node.txt', message);
*/

let fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
  console.log(data);
});

fs.writeFile('another_new_file.txt', "Hi, it's me", (err, data) => {});

console.log("Test");