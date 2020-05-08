const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send("This is home page");
});

app.get('/news', (req, res) => {
  res.send("This is news page");
});

app.get('/about', (req, res) => {
  console.log(req.params);
  res.send("This is about page");
});

app.get('/about/:name', (req, res) => {
  console.log(req.params);
  res.send(`Name -> ${req.params.name}`);
});

app.get('/about/:name/:id', (req, res) => {
  console.log(req.params);
  res.send(`Name -> ${req.params.name} \n ID -> ${req.params.id}`);
});

app.listen(3000);
console.log("Server successfully started running on 3000 port");