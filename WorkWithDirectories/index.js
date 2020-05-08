const fs = require('fs');

// unlink deletes file, unlinkSync() has 1 argument (only file path)
/*fs.unlink('file.txt', () => {
  console.log("File was deleted");
});*/

/*
fs.mkdirSync('CreatedWithNodeFolder'); // creates folder
fs.rmdirSync('CreatedWithNodeFolder'); // removes folder
*/

// create folder, and then inside that, create a file
/*fs.mkdir('CreatedWithNodeFolder', () => {
  fs.writeFile('./CreatedWithNodeFolder/nodeText.txt', "Text inside the file!!!", () => {
    console.log("Directory and File created successfully!!!");
  });
});*/

fs.unlink('./CreatedWithNodeFolder/nodeText.txt', () => {
  fs.rmdir('CreatedWithNodeFolder', () => {
    console.log("Directory and File deleted successfully!!!");
  });
});
